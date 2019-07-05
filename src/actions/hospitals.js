import axios from 'axios'

async function fetchHospitals() {
    const { data } = await axios(`/hospitals`)
    return data
}

async function fetchHospitalNames() {
    const { data } = await axios(`/hospitals/names-dataset`)
    return data
}

export default {
    fetchHospitals,
    fetchHospitalNames
}
