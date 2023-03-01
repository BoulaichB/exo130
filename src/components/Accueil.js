import React from 'react';
import { motion } from "framer-motion";

const Accueil = () => {
  // const anim = {}
  return (
    
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}}>
        <h1 className='text-center font-bold text-xl'>Bienvenue sur la page d'accueil UwU.</h1>
    </motion.div>
  )
}

export default Accueil