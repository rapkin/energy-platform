import axios from 'axios'
import { api } from '../config'

async function fetchHospitals() {
    const { data } = await axios(`${api}/hospitals`)
    return data
}

async function fetchHospitalNames() {
    const { data } = await axios(`${api}/hospitals/names-dataset`)
    return data
}

export default {
    fetchHospitals,
    fetchHospitalNames
}
