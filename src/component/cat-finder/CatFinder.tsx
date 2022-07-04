import React, { useCallback, useEffect } from 'react'
import Cat from '../../client/Cat'
import { getCat, getCatWithQuote } from '../../client/cataas'
import MyTextInput2 from '../input/MyTextInput2'
import useCatFinderReducer from './CatFinderReducer'

function CatFinder(): JSX.Element {
    const [state, dispatch] = useCatFinderReducer({ processing: true, url: '', quote: '' })

    const processCat = useCallback((catFunction: () => Promise<Cat>) => {
        dispatch({ type: 'setProcessing', value: true })
        catFunction()
            .then((cat) => {
                dispatch({ type: 'setUrl', value: cat.url })
            })
            .finally(() => {
                dispatch({ type: 'setProcessing', value: false })
            })
    }, [dispatch])

    const refresh = useCallback(() => {
        if (state.quote !== '') {
            processCat(() => {return getCatWithQuote(state.quote)})
        } else {
            processCat(getCat)
        }
    }, [processCat, state.quote])

    useEffect(() => {
        processCat(getCat)
    }, [processCat])

    function handleClick(event: React.MouseEvent<HTMLButtonElement>): void {
        event.preventDefault()
        refresh()
    }

    const imageSrc = `https://cataas.com${state.url}`

    return state.processing
        ? <>Processing...</>
        : (
            <>
                <img src={imageSrc} alt={'cat'}/>
                <br/><br/><br/><br/>
                <form>
                    <MyTextInput2
                        content={state.quote}
                        onChange={(value: string) => {dispatch({ type: 'setQuote', value })}}
                    />
                    <button type={'submit'} onClick={handleClick}>Meow!</button>
                </form>
            </>
        )
}

export default CatFinder
