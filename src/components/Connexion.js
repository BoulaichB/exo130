import React , { useState, useRef }from 'react';
import { Form, Link } from 'react-router-dom';

const Connexion = (props) => {
  let [completed, setCompleted] = useState(false);
  let email = useRef();
  let password = useRef();
  const formCompleted = () => {
    if(email.current.value.length != 0 && password.current.value != 0){
      setCompleted(true);
      props.setEmail(email.current.value);
      props.setPassword(password.current.value);
    }
  }
  return (
    <div>
        <h1 className='font-bold text-3xl text-center'>Connexion</h1>
        <Form method='post'>
            <input type="text" placeholder='Email' className='block border-2 border-gray-200 m-2' ref={email} onInput={formCompleted}/>
            <input type="password" placeholder='Mot de passe' className='block border-2 border-gray-200 m-2' ref={password} onInput={formCompleted}/>
            <Link to={completed ? '/my-account' : '/connexion'}><button type='submit' className='px-4 py-2 bg-blue-500 text-white font-bold rounded-lg m-2'>Submit</button></Link>
        </Form>
    </div>
  )
}

export default Connexion