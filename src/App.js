import { Routes, Route } from "react-router-dom";
import Accueil from "./components/Accueil";
import About from "./components/About";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Accueil/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </div>
  );
}

export default App;
