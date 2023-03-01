import axios from 'axios'
import { dailyDataType } from '../Types/types'

export const DailyAPI = async (search: String, day: String): Promise<dailyDataType> => {
    const data = await axios.get(`http://localhost:3000/daily/${search}/${day}`).then(res => res.data).then(res => res)
    return data
}
