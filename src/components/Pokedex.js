import React, { useState } from 'react';
import pokedex from '../Data/pokedex.json'
import pokedexcss from '../style/Pokedex.css' 

const Pokedex = () => {
  const [pokemon, setPokemon] = useState(pokedex);
  const [search, setSearch] = useState('');


  const deletePokemon = (id) => {
    setPokemon(pokemon.filter(pokemon => pokemon.id !== id));
  };


  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const Type = (type) => {
    switch (type) {
      case 'Normal':
        return 'gray';
      case 'Fire':
        return 'red';
      case 'Water':
        return 'blue';
      case 'Grass':
        return 'green';
     case 'Flying':
        return '#ebe5e2';
      case 'Fighting':
        return '#f89c03';
     case 'Poison':
        return '#ac19cf';
      case 'Electric':
        return '#f2e83a';
     case 'Ground':
        return '#ca5e13';
      case 'Rock':
        return '#c3ad88';
      case 'Psychic':
        return '#f50abe';
      case 'Ice':
        return 'lightblue';
      case 'Ghost':
        return '#6711b2';
      case 'Bug':
        return '#9fc520';
      case 'Steel':
        return 'lightgray';
      case 'Dragon':
        return '#340eab';
     case 'Dark':
        return 'black';
      case 'Fairy':
        return 'pink';
      default:
        return 'gray';
    }
  };

  const filterPokemon = pokemon.filter(pokemon => {
    const EN = pokemon.name.english.toLowerCase();
    const FR = pokemon.name.french.toLowerCase();
    const data = search.toLowerCase();
    return EN.includes(data) || FR.includes(data);
  });


  return (
    <div>
      <h1>Pokedex</h1>
      <input
        type="text"
        value={search}
        onChange={handleSearch}
        placeholder= "Search a Pokemon / Rechercher un Pokémon "
        size={80}
      />
      <div className="pokedex">
        {filterPokemon.map(pokemon => (
          <div
            key={pokemon.id}
            style={{ backgroundColor: Type(pokemon.type[0]) }}
            className="pokedex-info"
          >
            <div>
              <h3>№ {pokemon.id} {pokemon.name.english} </h3>
              <h4> {pokemon.name.french}</h4>
              <h3>{pokemon.type[0]} {pokemon.type[1]}</h3>
              <p>HP: {pokemon.base.HP}</p>
              <p>Attack: {pokemon.base.Attack}</p>
              <p>Defense: {pokemon.base.Defense}</p>
              <p>Sp.Attack: {pokemon.base['Sp. Attack']}</p>
              <p>Sp.Defense: {pokemon.base['Sp. Defense']}</p>
              <p>Speed: {pokemon.base.Speed}</p>
            </div>
            <button onClick={() => deletePokemon(pokemon.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Pokedex;