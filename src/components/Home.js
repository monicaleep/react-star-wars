import React, {useState, useEffect} from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

import '../styles/components/Home.css'
const Home = () => {

  const [starships,setStarships] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    const url1 = 'https://swapi.dev/api/starships/'
    const url2 = 'http://swapi.dev/api/starships/?page=2'
    const url3 = 'http://swapi.dev/api/starships/?page=3'
    const url4 = 'http://swapi.dev/api/starships/?page=4'
    const starshipArray = []
    Promise.all([axios.get(url1),axios.get(url2), axios.get(url3), axios.get(url4)])
    .then(responses=>{
      responses.forEach(response=>starshipArray.push(...response.data.results))
      setStarships(starshipArray)
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
           key={ship.name}
            >
                <div className='card'>
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
