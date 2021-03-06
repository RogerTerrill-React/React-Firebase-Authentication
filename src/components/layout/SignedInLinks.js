import React from 'react';
import { NavLink } from 'react-router-dom';


const SignedInLinks = () => {
  return (
    <ul className="right">
      <li><NavLink to='/createhome'>New Home</NavLink></li>
      <li><NavLink to='/'>Log Out</NavLink></li>
      <li><NavLink to='/' className='btn btn-floating deep-orange lighten-2'>NN</NavLink></li>
    </ul>
  );
};

export default SignedInLinks;