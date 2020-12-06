import React from 'react';
import { Link } from 'react-router-dom';

const Starship = ({location : {state}}) => {
  console.log(state)
  // useEffect(()=>{
  //   const {id} = props.match.params
  //   console.log(id)
  // },[])
  return (
    <div>{state.name}
      Length: {state.length}ft
      Max Speed: {state.max_atmosphering_speed}mph
      <Link to='/'>Home</Link>
    </div>
  );
}


export default Starship;
