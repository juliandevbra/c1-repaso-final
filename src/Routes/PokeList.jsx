import React from 'react'
import { Link } from 'react-router-dom'
import { usePokeStates } from '../Context'

const PokeList = () => {

  const {pokeState} = usePokeStates()

  return (
    <div>
      {pokeState.pokeList.map(poke => <Link to={'/poke/' + poke.name} key={poke.name}>
          <li>{poke.name}</li>
        </Link>)}
    </div>
  )
}

export default PokeList