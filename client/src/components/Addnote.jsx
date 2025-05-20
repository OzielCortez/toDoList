import { useNavigate } from 'react-router-dom';
import { MdOutlineNotes } from "react-icons/md";
import React, { useState } from 'react';


function Addnote() {
   const navigate = useNavigate();

    // agregar
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [done, setDone] = useState(false);

  const handleSubmit = async () => {

    if (!title.trim() || !description.trim()) {
      alert("Por favor llena título y descripción");
      return;
    }

    try {
      const response = await fetch('http://localhost:3001/api/todos', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          description,
          done,
          listId: 1,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        alert("Error: " + (errorData.error || 'No se pudo guardar la nota'));
        return;
      }

      alert("Nota guardada exitosamente");
      navigate('/todo');

    } catch (error) {
      alert("Error al conectar con el servidor");
      console.error(error);
    }
  };
    return (
        <div className="flex items-center justify-center min-h-screen text-center font-bold">
            <div className=' m-5 w-full max-w-md bg-amber-200 p-6 sm:p-10 rounded-xl shadow-lg text-center fill-white drop-shadow-xl/50'>
            <h1 className='text-3xl p-2.5'>Nueva tarea</h1> 

            <input className='text-lg sm:text-xl m-3 px-4 py-2 w-full  bg-amber-100 rounded-lg p-4 shadow-sm hover:shadow-md cursor-pointer transition-shadow ' type="text" placeholder="Titulo"  value={title}
             onChange={e => setTitle(e.target.value)} /> <br/>
            <input className='text-lg sm:text-xl m-3 px-4 py-2 w-full  bg-amber-100 rounded-lg p-4 shadow-sm hover:shadow-md cursor-pointer transition-shadow' type="text" placeholder="Descripción"  value={description}
            onChange={e => setDescription(e.target.value)} /><br/>
            <input className='text-lg sm:text-xl m-3 px-4 py-2 w-full  bg-amber-100 rounded-lg p-4 shadow-sm hover:shadow-md cursor-pointer transition-shadow' type="text" placeholder='Done' value={done}
            onChange={e => setDone(e.target.value)} /><br />
            <div className="flex justify-center m-1">
                <button onClick={handleSubmit} id="InicioN" className="flex justify-center items-center gap-2 text-base sm:text-lg md:text-xl lg:text-2xl m-2 rounded-lg px-4 py-2 text-white bg-green-700 hover:bg-green-600 transition-colors duration-300 shadow-md mx-auto">
                <MdOutlineNotes className="text-2xl" /> <span>Guardar Notas</span>
                 </button>
            </div>
            <div className="flex justify-center m-1">
                <button onClick={() => navigate("/todo")} id="InicioN" className="flex justify-center items-center gap-2 text-base sm:text-lg md:text-xl lg:text-2xl m-2 rounded-lg px-4 py-2 text-white bg-green-700 hover:bg-green-600 transition-colors duration-300 shadow-md mx-auto">
                 <MdOutlineNotes className="text-2xl" /> <span>Ver    Notas</span>
                 </button>
            </div>
             
            </div>
        </div>
        
    )
}




export default Addnote;