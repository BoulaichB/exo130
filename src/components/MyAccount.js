import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const MyAccount = (props) => {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}}>
      <h1 className='font-bold text-3xl text-center'>Mon profil</h1>
      <div className='m-2'>
        <span className='font-bold'>Mon Email: </span>
        <span>{props.email}</span>
      </div>
      
      <div className='m-2'>
        <span className='font-bold'>Mon mot de passe: </span>
        <span>{props.password}</span>
      </div>
      <Link to='/edit'><button type='submit' className='px-4 py-2 bg-blue-500 text-white font-bold rounded-lg m-2'>Edit</button></Link>
    </motion.div>
  )
}

export default MyAccount