const express = require('express');
const router = express.Router({ mergeParams: true });

/* GET reviews index /posts/:id/reviews */
router.get('/', (req, res, next) => {
	res.send('INDEX /posts/:id/reviews');
});

/* POST reviews create /posts/:id/reviews */
router.post('/', (req, res, next) => {
	res.send('CREATE /posts/:review_id/reviews');
});

/* GET reviews edit /posts/:id/reviews/:review_id/edit */
router.get('/:review_id/edit', (req, res, next) => {
	res.send('EDIT /posts/:id/reviews/:review_id/edit');
});

/* PUT reviews update /posts/:id/reviews/:review_id */
router.put('/:review_id', (req, res, next) => {
	res.send('UPDATE /posts/:id/reviews/:review_id');
});

/* DELETE reviews destroy /posts/:id/reviews/:review_id */
router.delete('/:review_id', (req, res, next) => {
	res.send('DELETE /posts/:id/reviews/:review_id');
});

module.exports = router;

// RESTful routing
//--------------------
// GET index         /reviews
// GET new           /reviews/new
// POST create       /reviews/
// GET show          /reviews/:review_id
// GET edit          /reviews/:review_id/edit
// PUT update        /reviews/:review_id
// DELETE destroy    /reviews/:review_id
//--------------------
