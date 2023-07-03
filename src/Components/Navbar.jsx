import React from 'react'
import { Link } from 'react-router-dom'
import { usePokeStates } from '../Context'

const Navbar = () => {
  const {pokeState, pokeDispatch} = usePokeStates()

  const deleteChosen = (poke) => {
    const arrWithoutPokeDeleted = pokeState.chosen.filter(pokeChosen => pokeChosen.id !== poke.id)
    pokeDispatch({type: 'DELETE_CHOSEN', payload: arrWithoutPokeDeleted})
  }

  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='contact'>Contact</Link>
      <Link to='about'>About</Link>
        {pokeState.chosen.map(poke => <button key={poke.id} onClick={() => deleteChosen(poke)}>
          <img src={poke.sprites?.front_default} alt="" />
          </button>)}
    </div>
  )
}

export default Navbar