import axios from "axios"
import { hourlyDataType } from "../Types/types"

export const HourlyAPI = async (search: String): Promise<hourlyDataType> => {
    const data = await axios.get(`http://localhost:3000/hourly/${search}`).then(res => res.data).then(res => res)
    return data
}