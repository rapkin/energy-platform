import axios from 'axios'
import qs from 'query-string'
import { api } from '../config'

async function fetchRecords(pools) {
    if (!pools || !pools.length > 0) throw new Error('pools argument required')
    const query = qs.stringify({ pools })
    const { data } = await axios(`${api}/records?${query}`)
    return data
}

export default {
    fetchRecords
}
