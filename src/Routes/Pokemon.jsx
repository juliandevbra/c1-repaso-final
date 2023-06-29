import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { usePokeStates } from '../Context'
import pokeball from '../assets/pokeball_icon_136305.png'
import pokegot from '../assets/Poké_Ball_icon.svg'
const Pokemon = () => {

    const {pokeState, pokeDispatch} = usePokeStates()
    const params = useParams()
    const urlPoke = 'https://pokeapi.co/api/v2/pokemon/' + params.name

    useEffect(() => {

        const fetchPoke = async () => {
          try{
            let res = await axios(urlPoke)
            pokeDispatch({type: 'GET_POKE', payload: res.data})
          } catch (err) {
            console.log(err)
          }
        }
        fetchPoke()
    }, [])

    const addChosen = () => {
      const findPoke = pokeState.chosen.find(poke => poke.id === pokeState.pokemon.id)
      if(!findPoke){
        pokeDispatch({type: 'ADD_CHOSEN', payload: pokeState.pokemon})
      } else {
        alert('Ya está agregado')
      }
    }

  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
        {pokeState.pokemon.name}
        <img style={{width: '150px'}} src={pokeState.pokemon.sprites?.front_default} alt="" />


        <button onClick={addChosen}>
          <img src={pokegot} style={{width: '40px'}} alt="" />
        </button>
        {/* <button><img src={pokeball} style={{width: '40px'}} alt="" /></button> */}
    </div>
  )
}

export default Pokemon


