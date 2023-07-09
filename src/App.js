import {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';



function App() {
  const [pokemon, setPokemon] = useState([]);


  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807") 
      .then(response => {
        setPokemon(response.data.results);
        console.log(response.data);
      }).catch(err=>{
        console.log(err);
      });
      
  }, []);
  const capitalizeFirstLetter = (name) => {
    return name.charAt(0).toUpperCase() + name.substring(1);
  }
  return (
    <div className="App">

      <h2>Fetch Pokemon</h2>
      {pokemon.map((pokemon, index)=>(
        <p key = {index}>{capitalizeFirstLetter(pokemon.name)}</p>
      ))}
    </div>
  );
}

export default App;
