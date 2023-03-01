import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}}>
        <h1 className='text-center font-bold text-xl'>Page About :D</h1>
    </motion.div>
  )
}

export default About