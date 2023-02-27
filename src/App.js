import { Routes, Route } from "react-router-dom";
import Accueil from "./components/Accueil";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Accueil/>}/>
      </Routes>
    </div>
  );
}

export default App;
