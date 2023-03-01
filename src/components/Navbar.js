import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        <nav className='my-5 mx-5'>
            <Link to='/'><span className='px-5 py-3 border rounded bg-blue-500 text-white mx-5'>Accueil</span></Link>
            <Link to='/about'><span className='px-5 py-3 border rounded bg-blue-500 text-white mx-5'>About</span></Link>
            <Link to='/liste'><span className='px-5 py-3 border rounded bg-blue-500 text-white mx-5'>Liste</span></Link>
            <Link to='/connexion'><span className='px-5 py-3 border rounded bg-blue-500 text-white mx-5'>Connexion</span></Link>
        </nav>
        <main>
            <Outlet/>
        </main>
        
    </div>
    
  )
}

export default Navbar