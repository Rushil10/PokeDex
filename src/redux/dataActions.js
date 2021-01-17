import axios from 'axios'
import { GET_DATA } from './types'

export const getPokemons = () => dispatch => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=100&offset=125')
    .then(res => {
        //console.log(res.data.results)
        dispatch({type:GET_DATA,pokemons:res.data.results})
    })
    .catch(err => {
        console.log(err)
    })
}