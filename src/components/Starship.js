import React from 'react';
import { Link } from 'react-router-dom';

const Starship = (props) => {
  console.log(props.location.state)
  // useEffect(()=>{
  //   const {id} = props.match.params
  //   console.log(id)
  // },[])
  return (
    <div>{props.location.state.name}
      <Link to='/'>Home</Link>
    </div>
  );
}


export default Starship;
