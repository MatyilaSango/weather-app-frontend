import axios from "axios"
import { todayDataType } from "../Types/types"

export const TodayAPI = async (search: string): Promise<todayDataType> => {
    console.log("dadddaa")
    const data = await axios.get(`http://localhost:3000/today/${search}`).then(res => res.data).then(res => res)
    console.log("daddd"+data)
    return data
}