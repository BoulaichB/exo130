import React from 'react';
import { Link } from 'react-router-dom';

const Liste = () => {
  return (
    <ul>
        <li><Link to='/liste/element1'>Premier élément</Link></li>
        <li><Link to='/liste/element2'>Deuxième élément</Link></li>
        <li><Link to='/liste/element3'>Troisième élément</Link></li>
    </ul>
  )
}

export default Liste