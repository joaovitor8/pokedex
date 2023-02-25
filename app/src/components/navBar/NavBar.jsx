import "./navBar.css"

function NavBar( {pokemonFilter} ) {
  return (
    <div className="NavBar"> {/* Pesquisa os pokemons */}
      <img src="pokemon-logo.png" alt="pokemon logo" />
      <input type="text" placeholder="look for pokemon" onChange={(e) => pokemonFilter(e.target.value.toLowerCase())}/>
    </div>
  )
}

export default NavBar