import axios from 'react-native-axios'

const BASE_URL = 'https://api.unsplash.com/photos/?client_id='
const LIST_OF_IMGS = 'cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0'

const imagesFromApi = {
    list:(param=null)=>axios(`${BASE_URL}${LIST_OF_IMGS}`, param)
}
export default imagesFromApi