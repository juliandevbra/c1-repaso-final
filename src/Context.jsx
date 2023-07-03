import axios from "axios";
import { createContext, useContext, useState, useEffect, useReducer } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const PokeStates = createContext()

const InitialPokeState = {
    pokeList: [],
    pokemon: {},
    chosen: JSON.parse(localStorage.getItem('chosen')) || []
}

const pokeReducer = (state, action) => {
    switch(action.type){
        case 'GET_LIST':
            return { ...state, pokeList: action.payload}
        case 'GET_POKE':
            return { ...state, pokemon: action.payload}
        case 'ADD_CHOSEN':
            return {...state, chosen: [...state.chosen, action.payload]}
        case 'DELETE_CHOSEN':
            return {...state, chosen: action.payload}
        default: 
            throw new Error()
    }
} 

const Context = ({children}) => {
    const [pokeState, pokeDispatch] = useReducer(pokeReducer, InitialPokeState)
    const urlList = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0'

    useEffect(() => {
        axios(urlList)
        .then(res => {
            toast('Se obtuvo la lista de pokemones', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
            pokeDispatch({type: 'GET_LIST', payload: res.data.results})
        })
        .catch(err => Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Hubo un error para traer la lista!',
            footer: err,
          }))
    }, [])

    useEffect(() => {
        localStorage.setItem('chosen', JSON.stringify(pokeState.chosen))
    }, [pokeState.chosen])

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
