import axios from "axios"

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '35c3c83734c24f9b9fe9a770f4c6f92b'
    }
})