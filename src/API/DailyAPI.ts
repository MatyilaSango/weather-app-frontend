import axios from 'axios'
import { dailyDataType } from '../Types/types'

export const DailyAPI = async (search: string, day: string): Promise<dailyDataType> => {
    const data = await axios.get(`http://localhost:3000/daily/${search}/${day}`).then(res => res.data).then(res => res)
    return data
}
