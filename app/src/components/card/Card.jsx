import "./card.css"

function Card( {name, image, types} ) {

  // Mostra um ou dois tipos do pokemon
  const typePokemon = () => {
    if (types[1]) {
      return types[0].type.name + " / " + types[1].type.name;
    }
    return types[0].type.name
  }

  return (
    <div className="Card">  {/* Carta do pokemon em si */}
      <img src={image} alt="imagens-pokemon" />
      <div>
        <p>Name: {name}</p>
        <p>Types: {typePokemon()}</p>
      </div>
    </div>
  )
}

export default Card