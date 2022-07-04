import axios from 'axios'
import Cat from './Cat'

export function getCat(): Promise<Cat> {
    return axios.get(`https://cataas.com/cat?json=true`)
        .then(result => {
            const data = result.data
            return {
                url: data.url
            }
        })
}

export function getCatWithQuote(quote: string): Promise<Cat> {
    return axios.get(`https://cataas.com/cat/says/${quote}?json=true`)
        .then(result => {
            const data = result.data
            return {
                url: data.url
            }
        })
}
