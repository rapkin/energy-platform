import axios from 'axios'
import qs from 'query-string'

async function fetchRecords(pools) {
    if (!pools || !pools.length > 0) throw new Error('pools argument required')
    const query = qs.stringify({ pools })
    const { data } = await axios(`/records?${query}`)
    return data
}

export default {
    fetchRecords
}
