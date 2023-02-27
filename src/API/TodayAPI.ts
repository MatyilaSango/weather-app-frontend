import axios from "axios"
import { todayDataType } from "../Types/types"

export const TodayAPI = async (): Promise<todayDataType> => {
    const data = await axios.get("http://localhost:3000/today/Cape Town, Western Cape").then(res => res.data).then(res => res)
    return data
}