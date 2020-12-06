import React, {useState, useEffect} from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

import '../styles/components/Home.css'
const Home = () => {

  const [starships,setStarships] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    let url1 = 'https://swapi.dev/api/starships/'
    let url2 = 'http://swapi.dev/api/starships/?page=2'
    let url3 = 'http://swapi.dev/api/starships/?page=3'
    const myarray = []
    Promise.all([axios.get(url1),axios.get(url2), axios.get(url3)])
    .then(responses=>{
      responses.map(response=>myarray.push(...response.data.results))
      setStarships(myarray)
    })

    // axios.get('https://swapi.dev/api/starships/').then(res=>{
    //   setStarships(res.data.results)
    //   setLoading(false)
    //   console.log(starships)
    // })

  },[])

  // const getMoreStarships =()=>{
  //   axios.get('http://swapi.dev/api/starships/?page=2').then(res=>{
  //     setStarships(...starships)
  //   })
  // }

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
