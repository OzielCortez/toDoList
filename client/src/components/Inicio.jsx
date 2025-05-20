import { useNavigate } from 'react-router-dom';
import { IoIosAddCircleOutline } from "react-icons/io";
import Notaslogo from '../image/agenda.png';
function Inicio() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen font-bold">
      <div className='text-center text-3xl'>
        <h2 id='titulo' className='m-8'>To do list</h2> 
        <img className="mx-auto w-48 md:w-48 lg:w-72 m-10" src={Notaslogo} alt="Logo de Notas" />
        <h3 id='saludo' className='m-3'>¡Bienvenidos!</h3> 
        <button
          id="agregarN"
          onClick={() => navigate("/addnote")} className="flex items-center gap-2 text-base sm:text-lg md:text-xl lg:text-2xl m-4 sm:m-6 md:m-8 lg:m-10 rounded-lg px-4 py-2  bg-gray-900 text-white hover:bg-gray-800 
          transition-colors duration-300 shadow-md mx-auto">
          <IoIosAddCircleOutline className="text-2xl" />
          <span>Agregar Nota</span>
        </button>
      </div>
    </div>

  );
}

export default Inicio;
