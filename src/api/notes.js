import apiUrl from '../apiConfig'
import axios from 'axios'


//GET -> shows all notes in db
export const getNotes = () => {

    const config = {
        method: 'GET',
        url: `${apiUrl}/api/notes`
    }

    return axios(config)
}