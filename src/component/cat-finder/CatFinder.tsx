import React, { useEffect, useState } from 'react'
import getCat from '../../client/cataas'

function CatFinder(): JSX.Element {
    const [processing, setProcessing] = useState(true)
    const [url, setUrl] = useState('')

    useEffect(() => {
        getCat()
            .then((cat) => {
                setUrl(cat.url)
            })
            .finally(() => {
                setProcessing(false)
            })
    }, [])

    const imageSrc = `https://cataas.com${url}`

    return processing
        ? <>Processing...</>
        : <img src={imageSrc} alt={'cat'}/>
}

export default CatFinder
