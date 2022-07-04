import React, { useCallback, useEffect, useState } from 'react'
import Cat from '../../client/Cat'
import { getCat, getCatWithQuote } from '../../client/cataas'
import MyTextInput2 from '../input/MyTextInput2'

function CatFinder(): JSX.Element {
    const [processing, setProcessing] = useState(true)
    const [url, setUrl] = useState('')
    const [quote, setQuote] = useState('')

    function processCat(catFunction: () => Promise<Cat>): void {
        setProcessing(true)
        catFunction()
            .then((cat) => {
                setUrl(cat.url)
            })
            .finally(() => {
                setProcessing(false)
            })
    }

    const refresh = useCallback(() => {
        if (quote !== '') {
            processCat(() => {return getCatWithQuote(quote)})
        } else {
            processCat(getCat)
        }
    }, [quote])

    useEffect(() => {
        processCat(getCat)
    }, [])

    function handleClick(event: React.MouseEvent<HTMLButtonElement>): void {
        event.preventDefault()
        refresh()
    }

    const imageSrc = `https://cataas.com${url}`

    return processing
        ? <>Processing...</>
        : (
            <>
                <img src={imageSrc} alt={'cat'}/>
                <br/><br/><br/><br/>
                <form>
                    <MyTextInput2 content={quote} onChange={setQuote}/>
                    <button type={'submit'} onClick={handleClick}>Meow!</button>
                </form>
            </>
        )
}

export default CatFinder
