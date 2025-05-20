import { useState, useEffect } from "react";
import axios from "axios";

function ToDo() {
    const [ToDo, setToDo] = useState([]);

    useEffect(() => {
        axios
            .get("https://todolist-backend-0gkw.onrender.com/api")  
            .then((res) => setToDo(res.data.data))
            .catch((err) => console.error("Error fetching data:", err)); 
    }, []);


    const handleToggleDone = async (id, newDoneValue) => {
        /*try {
            await axios.patch(`http://localhost:3001/api/${id}`, {
                done: newDoneValue,
            });*/
        try {
            await axios.patch(`https://todolist-backend-0gkw.onrender.com/api${id}`, {
                done: newDoneValue,
            });
            // Actualiza el estado local
            setToDo((prevTodos) =>
                prevTodos.map((todo) =>
                    todo.id === id ? { ...todo, done: newDoneValue } : todo
                )
            );
        } catch (err) {
            console.error("Error al actualizar el estado de la tarea:", err);
        }
    };



    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center bg-amber-200 p-6 ">
            <h1 className="text-4xl font-bold mb-8 text-gray-900">Mi todoList</h1>
            <div className="w-full max-w-md bg-amber-300 rounded-xl shadow-lg p-6 space-y-4">
                {ToDo.map(todo => (
                <label className="flex items-center bg-amber-100 rounded-lg p-4 shadow-sm hover:shadow-md cursor-pointer transition-shadow" key={todo.id}>
                    <input className="form-checkbox h-6 w-6 text-green-700" type="checkbox" checked={todo.done} onChange={() => handleToggleDone(todo.id, !todo.done)} />
                   <div className="ml-4 flex flex-col text-left">
                     <span className={`text-lg font-semibold ${todo.done ? 'line-through text-gray-500' : 'text-gray-900'}`}>
                        {todo.title} <br/>
                     </span>
                      {todo.description}
                     <span className={`text-sm ${todo.done ? 'text-green-700' : 'text-red-600'}`}>
                      {todo.done ? "Hecho" : "Pendiente"}
                      </span>
                    </div>
                </label>
            ))}
            </div> 
            
        </div>
    )
}


export default ToDo;