import { Routes, Route } from "react-router-dom";
import Accueil from "./components/Accueil";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Liste from "./components/Liste";
import Error from "./components/Error";

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Accueil/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/liste' element={<Liste/>}/>
        <Route path='/*' element={<Error/>}/>
      </Routes>
    </div>
  );
}

export default App;
