import {useEffect, useState} from 'react';
import './App.css';



function App() {
  const [pokemon, setPokemon] = useState([]);


  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then(response => {
        return response.json();
      }).then(response => {
        console.log(response);
        setPokemon(response.results);
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
