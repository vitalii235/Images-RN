import { GET_IMAGES, GET_ID } from "../types"

const initialState={
    images:[],
    id:''
}
export const getImages =(state=initialState, action)=>{
    switch(action.type){
        case GET_IMAGES:
            return {
                 ...state, images:[...action.payload]
            }
        case GET_ID:
            return {
                ...state, id:action.payload
            }
        default:
            return state
    }
}