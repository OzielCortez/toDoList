const { ToDo } = require("../db.js");

const getToDoById = async (id) => {
    try {
        const getToDo = await ToDo.findByPk(id);
        if (!getToDo) {
            return {
                status: 404,
                error: "ToDo not found",
            };
        }
        return {
            status: 200,
            data: getToDo,
        };
    } catch (error) {
        return {
            status: 500,
            error: error.message,
        };
    }
}
module.exports = { getToDoById } ;