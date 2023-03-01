import { Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider
} from "react-router-dom";
import Accueil from "./components/Accueil";
import About from "./components/About";
import Liste from "./components/Liste";
import Error from "./components/Error";
import Connexion from "./components/Connexion";
import MyAccount from "./components/MyAccount";
import Edit from "./components/Edit";
import RootLayout from "./layout/RootLayout";
import { useState } from "react";

function App() {
  let [myEmail, setMyEmail] = useState('');
  let [myPassword, setMyPassword] = useState('');
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout/>}>

        <Route path='/' element={<Accueil/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/liste' element={<Liste/>}/>
        <Route path='/*' element={<Error/>}/>
        <Route path='/connexion' element={<Connexion setEmail={setMyEmail} setPassword={setMyPassword}/>}/>
        <Route path='/my-account' element={<MyAccount email={myEmail} password={myPassword}/>}/>
        <Route path='/edit' element={<Edit setEmail={setMyEmail} setPassword={setMyPassword}/>}/>

      </Route>
    )
  )
  return (
    <RouterProvider router={router}/>
  );
}

export default App;

