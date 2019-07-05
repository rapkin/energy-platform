import axios from 'axios'
import { api } from '../config'

async function fetchTypes() {
    const { data } = await axios(`${api}/types`)
    return data
}

export default {
    fetchTypes
}
