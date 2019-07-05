import axios from 'axios'
import { api } from '../config'

async function fetchDevices(pool) {
    const { data } = await axios(`${api}/devices?pool=${pool}`)
    return data
}

export default {
    fetchDevices
}
