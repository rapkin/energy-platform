import axios from 'axios'
import { api } from '../config'

async function fetchPools() {
    const { data } = await axios(`${api}/pools`)
    return data
}

export default {
    fetchPools
}
