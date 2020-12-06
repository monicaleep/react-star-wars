import React, {useState, useEffect} from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

import '../styles/components/Home.css'
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
            >
                <div className='card' key={ship.name}>
          {ship.name}
            </div>
        </Link>


      ))
    }
  }
 return  (
    <>{display()}</>
  );
}


export default Home;
