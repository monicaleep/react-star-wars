import React from 'react';

const Starship = (props) => {
  console.log(props.location.state)
  // useEffect(()=>{
  //   const {id} = props.match.params
  //   console.log(id)
  // },[])
  return (
    <div>{props.location.state.name}</div>
  );
}


export default Starship;
