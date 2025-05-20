// server/routes/todos.js
const { Router } = require("express");
const { postToDo } = require("../controllers/postToDo");
const { getAllToDo } = require("../controllers/getAllToDo");
const deleteToDo = require("../controllers/deleteToDo");
const {getToDoById } = require("../controllers/getToDoById");
const { updateToDo } = require("../controllers/updateToDo");
const router = Router();

// POST http://localhost:3001/api/todos
router.post("/", async (req, res, next) => {
    try {
        // postToDo espera recibir el body completo
        const { status, data, error } = await postToDo(req.body);
        if (error) return res.status(status).json({ error });
        return res.status(status).json(data);
    } catch (err) {
        next(err);
    }
});

// GET http://localhost:3001/api/todos
router.get("/", async (req, res, next) => {
    try {
        const todos = await getAllToDo();
        return res.json(todos);
    } catch (err) {
        next(err);
    }
});

router.delete("/:id", async (req, res, next) => {
    try {
        const { id } = req.params;
        const toDoId = await deleteToDo(id);
        return res.status(200).json(toDoId)
    } catch (err) {
        next(err);
    }
}) 

router.get("/:id", async (req, res, next) => {
    try {
        const { id } = req.params;
        const toDoId = await getToDoById(id);
        return res.status(200).json(toDoId);
    } catch(err){
        next(err);
    }
})

router.patch("/:id", async (req, res, next) => {
    try {
        const { id } = req.params;
        const response = req.body;
        const todoId = await updateToDo(id, response);
        return res.status(200).json(todoId);
    } catch (err) {
        next(err);
    }
})

module.exports = router;
