import React from 'react'
import { usePokeStates } from '../Context'

const Navbar = () => {
  const {pokeState, pokeDispatch} = usePokeStates()

  const deleteChosen = (poke) => {
    const arrWithoutPokeDeleted = pokeState.chosen.filter(pokeChosen => pokeChosen.id !== poke.id)
    pokeDispatch({type: 'DELETE_CHOSEN', payload: arrWithoutPokeDeleted})
  }

  return (
    <div>
        {pokeState.chosen.map(poke => <button onClick={() => deleteChosen(poke)}>
          <img src={poke.sprites?.front_default} alt="" />
          </button>)}
    </div>
  )
}

export default Navbar