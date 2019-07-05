import axios from 'axios'

async function fetchDevices(pool) {
    const { data } = await axios(`/devices?pool=${pool}`)
    return data
}

export default {
    fetchDevices
}
