import React, {useState, useEffect} from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

const Home = () => {

  const [starships,setStarships] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    axios.get('https://swapi.dev/api/starships/').then(res=>{
      setStarships(res.data.results)
      setLoading(false)
    })
  },[])

  const display = () =>{
    if(loading){
      return 'loading '
    } else{
      return starships.map(ship=>(
        <Link to={{
          pathname: '/starship',
          state: ship
        }}
            key={ship.name}  >
            {ship.name}
        </Link>
      ))
    }
  }
 return  (
    <div>{display()}</div>
  );
}


export default Home;
