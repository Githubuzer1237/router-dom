import React from 'react'
import  './Header.css';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
   <>
   <header className="header">
    <div className="container">
        <nav className="nav">
            <Link to={'/'}>HOME</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/contacts'}>Contacts</Link>

        </nav>
    </div>
   </header>
   </>
  )
}

export default Header