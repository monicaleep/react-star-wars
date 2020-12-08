import React, {useState, useEffect} from 'react';
import axios from 'axios'
import { Route } from 'react-router-dom'
import Starship from './Starship'

import Home from './Home'

const Router = () =>{
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
  },[]);
  const display = () => {
    if(loading){
      return 'Loading...'
    } else{
      return (
        <>
        <Route exact path="/" component={()=>(<Home starships={starships}/>)} />
        <Route path='/starship' render={({location}) =>
            <Starship location={location}/>
          }/>
          </>
      )
    }
  }

  return display()
}

export default Router;
