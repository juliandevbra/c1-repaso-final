import axios from "axios";
import { useReducer } from "react";
import { createContext, useContext, useState, useEffect } from "react";

const PokeStates = createContext()

const InitialPokeState = {
    pokeList: [],
    pokemon: {}
}

const pokeReducer = (state, action) => {
    switch(action.type){
        case 'GET_LIST':
            return {pokeList: action.payload, pokemon: state.pokemon}
        case 'GET_POKE':
            return {pokeList: state.pokeList, pokemon: action.payload}
        default: 
            throw new Error()
    }
} 

const Context = ({children}) => {
    const [pokeState, pokeDispatch] = useReducer(pokeReducer, InitialPokeState)
    const urlList = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0'

    useEffect(() => {
        axios(urlList)
        .then(res => pokeDispatch({type: 'GET_LIST', payload: res.data.results}))
        .catch(err => console.log(err))
    }, [])

    console.log(pokeState)
    return (
        <PokeStates.Provider value={{
            pokeState, pokeDispatch
        }}>
            {children}
        </PokeStates.Provider>
    )
}
export default Context

export const usePokeStates = () => useContext(PokeStates)