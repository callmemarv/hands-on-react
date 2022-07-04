import { Dispatch, useReducer } from 'react'

interface CatFinderState {
    processing: boolean
    url: string
    quote: string
}

interface SetProcessingAction {
    type: 'setProcessing'
    value: boolean
}

interface SetUrlAction {
    type: 'setUrl'
    value: string
}

interface SetQuoteAction {
    type: 'setQuote'
    value: string
}

type CatFinderAction = SetProcessingAction | SetUrlAction | SetQuoteAction

function reduce(state: CatFinderState, action: CatFinderAction): CatFinderState {
    switch (action.type) {
        case 'setProcessing': {
            return { ...state, processing: action.value }
        }
        case 'setUrl': {
            return { ...state, url: action.value }
        }
        case 'setQuote': {
            return { ...state, quote: action.value }
        }
    }
}

function useCatFinderReducer(initialState: CatFinderState): [CatFinderState, Dispatch<CatFinderAction>] {
    return useReducer(reduce, initialState)
}

export default useCatFinderReducer
