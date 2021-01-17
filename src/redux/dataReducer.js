import { GET_DATA, GET_DETAILS, LOADING_DATA } from "./types";

const initialState = {
    pokemons:[],
    pokemon:{},
    loading:false
}

export default function(state=initialState,action) {
    switch(action.type){
        case GET_DATA:
            return {
                ...state,
                pokemons:action.pokemons,
                loading:false
            }
        case LOADING_DATA:
            return {
                ...state,
                loading:true
            }
        case GET_DETAILS:
            return {
                ...state,
                pokemon:action.pokemon
            }
        default:
            return state;
    }
}