import React from 'react';

const Layout = (props) =>{
  return (
    <>
      <nav>
        Starship Database
      </nav>
      {props.children}
    </>
  )
}

export default Layout
