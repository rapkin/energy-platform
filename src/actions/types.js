import axios from 'axios'
import { api } from '../config'

async function fetchTypes() {
    const { data } = await axios(`${api}/types`)
    console.log(JSON.parse(data))
    return data
}

fetchTypes()

export default {
    fetchTypes
}
