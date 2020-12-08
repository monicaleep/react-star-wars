import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios'
import Pilot from './Pilot.js'

const Starship = ({location : {state}}) => {
  const [pilots, setPilots] = useState([])
  const [loaded, setLoaded] = useState(false)

  useEffect(()=>{
    const pilotsArray = []
    Promise.all(state.pilots.map(pilot=>axios.get(pilot)))
    .then(responses=>{
      responses.forEach(response=>pilotsArray.push(response.data))
      // console.log(pilotsArray)
      setPilots(pilotsArray)
      setLoaded(true)
    });
  },[state.pilots]) // React yelled at me til I put something in the array.

  const displayPilots = () => {
    if (state.pilots.length===0){
      return (<p>No pilots for this one</p>)
    } else if (!loaded){
      return (<p>Loading...</p>)
    } else{
      return pilots.map((pilot,idx)=><Pilot key={idx} name={pilot.name} />)
    }
  }
  return (
    <div className="starship--info">
      <h1>
        {state.name}
      </h1>
      <p>Length: {state.length}ft</p>
      <p>Max Speed: {state.max_atmosphering_speed}mph</p>
      <p>Manufacturer: {state.manufacturer}</p>
      <p>Cost: {state.cost_in_credits} credits</p>
      <h3>Pilots:</h3>
      {displayPilots()}
      <div>
        <Link to='/'>Home</Link>
      </div>
    </div>
  );
}


export default Starship;
