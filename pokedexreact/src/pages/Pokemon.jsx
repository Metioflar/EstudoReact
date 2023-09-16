import { useState } from "react"

function Pokemon(){
    let[pokeData, setPokeData]=useState()

    const fetchPokemon = async() =>{
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/`)
        const data = await response.json()
        console.log(data)
        setPokeData(data.results)
    }

return(
    <>
    <p>Pokemon</p>
    </>
)
}
export default Pokemon;