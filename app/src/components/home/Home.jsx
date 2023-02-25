import NavBar from "../navBar/NavBar"
import Card from "../card/Card"
import axios from "axios"
import { useEffect, useState } from "react"

import "./home.css"

function Home() {
  const [pokemons, setPokemons] = useState([]);

  // Carregando a API
  useEffect(() => {
    getPokemons()
  }, [])

  // Pegando os pokemons da API   // refazer
  const getPokemons = () => {
    var endpoints = []
    for (var i = 1; i < 501; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }
    axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res))
  }

  // Mandando os pokemons para a variavel  pokemons
  const pokemonFilter = (name) => {
    var filterPokemon = []
    if (name === "") {
      getPokemons()
    }
    for (var i in pokemons) {
      if (pokemons[i].data.name.includes(name)) {
        filterPokemon.push(pokemons[i])
      }
    }
    setPokemons(filterPokemon)
  }

  return (
    <div className="Home">
      <NavBar pokemonFilter={pokemonFilter}/> {/* Componente da pesquisa */}

      <div className="Cards">  {/* Componente que multiplica as cartas */}
        {
          pokemons.map((pokemon) => <Card name={pokemon.data.name} image={pokemon.data.sprites.front_default} types={pokemon.data.types}/>)
        }
      </div>

    </div>
  )
}

export default Home