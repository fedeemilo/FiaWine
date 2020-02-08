const createError = require('http-errors');
const express = require('express');
const engine = require('ejs-mate');
const path = require('path');
const logger = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const passport = require('passport');
const User = require('./models/user');
const session = require('express-session');
const mongoose = require('mongoose');

// require routes
const indexRouter = require('./routes/index');
const postsRouter = require('./routes/posts');
const reviewsRouter = require('./routes/reviews');
const testAPIRouter = require('./routes/testAPI');

const app = express();

// connect to the database
mongoose
	.connect(
		'mongodb+srv://fedeemilo:gracias2020@cluster0-9zuxs.mongodb.net/fiaWinedb?retryWrites=true&w=majority',
		{ useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
	)
	.then(() => {
		console.log('Connected to DB!');
	})
	.catch((err) => {
		console.log('ERROR: ', err.message);
	});

// use ejs-locals for all ejs templates
app.engine('ejs', engine);
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Configure passport and sessions
app.use(
	session({
		secret: 'hang ten dude!',
		resave: false,
		saveUninitialized: true
	})
);

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Mount routes
app.use('/', indexRouter);
app.use('/posts', postsRouter);
app.use('/posts/:id/reviews', reviewsRouter);
app.use('/testAPI', testAPIRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

module.exports = app;
