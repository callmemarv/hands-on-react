import axios from 'axios'
import Cat from './Cat'

function getCat(): Promise<Cat> {
    return axios.get('https://cataas.com/cat?json=true')
        .then(result => {
            const data = result.data
            return {
                url: data.url
            }
        })
}

export default getCat
