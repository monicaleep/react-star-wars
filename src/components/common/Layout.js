import React from 'react';

const Layout = (props) =>{
  return (
    <>
      <nav className="navbar">
        Starship Database
      </nav>
      {props.children}
    </>
  )
}

export default Layout
