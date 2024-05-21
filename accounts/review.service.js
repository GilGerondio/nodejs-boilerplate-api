const db = require('../_helpers/db');
const Review = db.Review;

module.exports = {
    create,
    getAll
};

async function create(params) {
    await Review.create(params);
}

async function getAll() {
    return await Review.findAll();
}
