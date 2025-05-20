const { DataTypes } = require("sequelize"); 

module.exports = (sequelize) => {
    sequelize.define(
        "toDo",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            title: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            description: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            createdAt: {
                type: DataTypes.DATE,
                defaultValue: DataTypes.NOW,
                allowNull: false,
            },
            dueDate: {
                type: DataTypes.DATE,
                allowNull: true,
            },
            order: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            done: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
            }
        },
        {
            timestamps: false,
        }
    );
};
