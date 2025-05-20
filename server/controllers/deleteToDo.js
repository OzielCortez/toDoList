const { ToDo } = require("../db.js");

const deleteToDo = async (id) => {
    try {
        const toDoToDelete = await ToDo.findByPk(id);
        if (!toDoToDelete) {
            return {
                status: 404,
                error: "ToDo not found",
            };
        }
        await toDoToDelete.destroy();

        return {
            status: 200,
            message: "ToDo deleted successfully",
        };
    } catch (error) {
        return {
            status: 500,
            error: error.message,
        };
    }
}
module.exports = deleteToDo;
