module.exports = (sequelize) => {
    const { DataTypes } = require('sequelize');

    const Review = sequelize.define('Review', {
        feedback: { type: DataTypes.STRING, allowNull: false },
        createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    });

    return Review;
};
