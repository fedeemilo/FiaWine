const Post = require('../models/post');

module.exports = {
    // Posts Index
	async postIndex(req, res, next) {
		let posts = await Post.find({});
		res.send(posts);
    }
}