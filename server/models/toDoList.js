const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define(
        "toDoList",
        {
            title: {
                type: DataTypes.TEXT,
                allowNull: false
            },
            createdAt: {
                type: DataTypes.DATE,
                defaultValue: DataTypes.NOW
            }
        },
        {
            timestamps: false,
        }
    );
};