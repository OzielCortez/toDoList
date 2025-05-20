const { ToDo } = require("../db.js");

const getAllToDo = async () => {
    try {
        const allToDo = await ToDo.findAll();
        if (allToDo.length == 0) {
            return {
                status: 404,
                error: "No todo items found",
            };
        }
        return {
            status: 200,
            data: allToDo,
        };
    } catch (error) {
        return {
            status: 500,
            error: error.message,
        };
    }

}
module.exports = {getAllToDo} ;