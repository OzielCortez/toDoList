// controllers/postToDo.js
const { ToDo } = require("../db");

async function postToDo({title,description,dueDate = null, order = null, done, listId}) {
    if (!title ||!description || typeof done !== "boolean" ||!listId) {
        return {
            status: 400,
            data: { error: "Faltan campos obligatorios: title, description, done (boolean) y listId" }
        };
    }

    // Creaci�n de la tarea
    const nuevaTarea = await ToDo.create({
        title,
        description,
        dueDate,
        order,
        done,
        listId
    });

    return {
        status: 201,
        data: nuevaTarea
    };
}

module.exports = { postToDo };




/*const { toDo } = require("../db.js"); 

const postToDo = async ({ id, title, description, createdAt, dueDate, order, done }) => {
    try {
        if (!id || !title || !description || !createdAt || done === undefined) {
            return {
                status: 401,
                error: "Missing required fields",
            };
        }
        const createToDo = await toDo.create({
                id,
                title,
                description,
                createdAt,
                dueDate,
                order,
            done,
                listId
        });
        return {
            status: 200,
            data: createToDo,
        };
    } catch (error) {
        throw {
            error: error?.status,
            message: error?.message
        };
    }
}
module.exports = postToDo;*/