import { GET_IMAGES, GET_ID } from "../types"
import imagesFromApi from "../../services/API"

export const loadPosts = (payload) => {
    return {
        type: GET_IMAGES,
        payload
    }
}

export const fetchImages = () => {
    return dispatch => {
        imagesFromApi.list()
            .then(res => dispatch(loadPosts(res.data)))

    }
}
export const getIdOfImg =(payload) => {
    return {
        type:GET_ID,
        payload
    }
}