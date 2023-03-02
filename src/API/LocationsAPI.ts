import axios from 'axios'
import { locationsType } from '../Types/types'

export const LocationsAPI = async (search: String): Promise<locationsType | any> => {
    const data = await axios.get(`http://localhost:3000/today/${search}`).then(res => res.data).then(res => res)
    return data
}
