import React from 'react'
import {Link} from 'react-router-dom';


function Header () {
    
    return(
        <div style={style()}>
           <h1>Blog App</h1>
           <Link style={ linkStyle } to="/">Home</Link> : <Link to="/about">About</Link>
        </div>
    ) 
}
const linkStyle = {
    textDecoration: 'none',
    color: '#fff'
}
const style =  () =>{
    return {
        display: '',
        color: '#fff',
        background: '#333',
        padding: '10px',
        textAlign: 'center'        
    }
}
export default Header
