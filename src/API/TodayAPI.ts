import axios from "axios"
import { todayDataType } from "../Types/types"

export const TodayAPI = async (search: String): Promise<todayDataType> => {
    const data = await axios.get(`http://localhost:3000/today/${search}`).then(res => res.data).then(res => res)
    return data
}