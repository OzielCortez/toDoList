const { ToDo } = require("../db.js");

const updateToDo = async (id, updatedData) => {

    try {
        // Buscamos la mascota por su ID en la base de datos
        const findToDoById = await ToDo.findByPk(id);
        const { title, description, order, done } = updatedData;
        if (!findToDoById) {
            return res.status(404).json({ mensaje: "ToDo doesnt found" });
        }

        // Actualizar las propiedades del mascota
        findToDoById.title = title;
        findToDoById.description = description;
        findToDoById.order = order;
        findToDoById.done = done;
        

        // Guardar los cambios en la base de datos
        await findToDoById.save();

        return { status: 200, data: findToDoById }
    } catch (err) {
        return {
            status: 500,
            error: err.message,
        };
    }
}

module.exports = {updateToDo} ;