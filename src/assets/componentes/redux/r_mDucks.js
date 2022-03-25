import axios from "axios"

//componentes

const dataIni = {
    array : [],
    page : 1
}

//type
const obtenerRm = 'obtenerRm'
const sig_obtenerRm = ' sig_obtenerRm'
//reducer

export default function rmReducer (state = dataIni, action) {
    switch(action.type){
        case obtenerRm :
            return {...state, array: action.payload}
        case sig_obtenerRm: 
            return {...state, array: action.payload.array, page: action.payload.page} 
            default:
            return state
        

    }

}

//acciones
export const obtermAccion = () => async (dispatch, getState) => {
    const page = getState().personajes.page
    
    try {
        const res = await axios.get (`https://rickandmortyapi.com/api/character?page=${page}`)
        dispatch ({
            type: obtenerRm, 
            payload: res.data.results
        })
    }
    catch (error){
        console.log(error);
    }

}

export const siguienteList = () => async (dispatch, getState) =>{
    const page = getState().personajes.page
    const siguiente = page+1
    
    try {
        const res = await axios.get (`https://rickandmortyapi.com/api/character?page=${siguiente}`)
        dispatch ({
            type:  sig_obtenerRm, 
            payload :{ 
                array : res.data.results,
                page: siguiente
            }
            })
    }
    catch (error){
        console.log(error);
    }

}

export const antesList = () => async (dispatch,getState) =>{
    const page = getState().personajes.page
    const anterior = page-1
    
    try {
        const res = await axios.get (`https://rickandmortyapi.com/api/character?page=${anterior}`)
        dispatch ({
            type:  sig_obtenerRm, 
            payload :{ 
                array : res.data.results,
                page: anterior
            }
            })
    }
    catch (error){
        console.log(error);
    }
}


