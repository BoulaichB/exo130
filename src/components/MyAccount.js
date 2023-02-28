import React from 'react';
import { Link } from 'react-router-dom';

const MyAccount = (props) => {
  return (
    <div>
      <h1 className='font-bold text-3xl text-center'>Mon profil</h1>
      <div className='m-2'>
        <span className='font-bold'>Mon Email: </span>
        <span>{props.email}</span>
      </div>
      
      <div className='m-2'>
        <span className='font-bold'>Mon mot de passe: </span>
        <span>{props.password}</span>
      </div>
      <Link><button type='submit' className='px-4 py-2 bg-blue-500 text-white font-bold rounded-lg m-2'>Edit</button></Link>
    </div>
  )
}

export default MyAccount