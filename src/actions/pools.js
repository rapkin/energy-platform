import axios from 'axios'

async function fetchPools() {
    const { data } = await axios(`/pools`)
    return data
}

export default {
    fetchPools
}
