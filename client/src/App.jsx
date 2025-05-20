import Addnote from "./components/Addnote";
import Inicio from "./components/Inicio";
import ToDo from "./components/ToDo";
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/addnote" element={<Addnote />} />
        <Route path="/todo" element={<ToDo />} />
      </Routes>
    </div>
  )
}

export default App;
