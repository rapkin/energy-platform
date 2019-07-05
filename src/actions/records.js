import axios from 'axios'
import qs from 'query-string'
import { api } from '../config'

async function fetchRecords(pools) {
    if (!pools || !pools.length > 0) throw new Error('pools argument required')
    const query = qs.stringify({ pools })
    const { data } = await axios(`${api}/records?${query}`)
    return data
}

async function fetchRecordsByHospital(hospitalId) {
    if (!hospitalId) throw new Error('hospitalId argument required')
    const { data } = await axios(`${api}/hospitals/${hospitalId}/data`)
    return data
}

export default {
    fetchRecords,
    fetchRecordsByHospital
}
