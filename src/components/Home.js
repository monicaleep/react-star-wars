import React from 'react';

import {
  Link
} from 'react-router-dom'

import '../styles/components/Home.css'
const Home = ({
  starships
}) => {


  const display = () => {
    return starships.map(ship => (

      <
      Link to = {
        {
          pathname: '/starship',
          state: ship
        }
      }
      key = {
        ship.name
      } >
      <
      div className = 'card' > {
        ship.name
      } <
      /div> <
      /Link>
    ))
  }

  return ( <
    > {
      display()
    } < />
  );
}


export default Home;
