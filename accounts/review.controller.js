// accounts/review.controller.js
const reviewService = require('./review.service');

module.exports = {
    create
};

async function create(req, res, next) {
    try {
        await reviewService.create(req.body);
        res.json({ message: 'Review submitted successfully' });
    } catch (error) {
        next(error);
    }
}
