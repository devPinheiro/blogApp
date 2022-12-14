import React from 'react'
import {Link} from 'react-router-dom';


function Header () {
    
    return <div style={style()}>
        <h1 className='mb-20'>Blog App</h1>
        <Link style={linkStyle} to='/'>
          Home
        </Link> | <Link style={linkStyle} to='/about'>
          About
        </Link>
      </div>; 
}
const linkStyle = {
    textDecoration: 'none',
    color: '#fff'
}
const style =  () =>{
    return { display: '', color: '#fff', background: '#4245a8', padding: '10px', textAlign: 'center' };
}
export default Header
