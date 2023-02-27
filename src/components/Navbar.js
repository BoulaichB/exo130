import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='my-5 mx-5'>
        <span className='px-5 py-3 border rounded bg-blue-500 text-white mx-5'><Link to='/'>Accueil</Link></span>
        <span className='px-5 py-3 border rounded bg-blue-500 text-white mx-5'><Link to='/about'>About</Link></span>
        <span className='px-5 py-3 border rounded bg-blue-500 text-white mx-5'><Link to='/liste'>Liste</Link></span>
    </div>
  )
}

export default Navbar