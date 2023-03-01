import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const Liste = () => {
  return (
    <motion.ul initial={{opacity: 0}} animate={{opacity: 1}}>
        <li><Link to='/liste/element1'>Premier élément</Link></li>
        <li><Link to='/liste/element2'>Deuxième élément</Link></li>
        <li><Link to='/liste/element3'>Troisième élément</Link></li>
    </motion.ul>
  )
}

export default Liste