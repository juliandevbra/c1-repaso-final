import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { usePokeStates } from '../Context'

const Pokemon = () => {

    const {pokeState, pokeDispatch} = usePokeStates()
    const params = useParams()
    const urlPoke = 'https://pokeapi.co/api/v2/pokemon/' + params.name
    console.log(params)

    useEffect(() => {
        axios(urlPoke)
        .then(res => pokeDispatch({type: 'GET_POKE', payload: res.data}))
    }, [])

  return (
    <div>
        {pokeState.pokemon.name}
        <img src={pokeState.pokemon.sprites?.front_default} alt="" />
    </div>
  )
}

export default Pokemon