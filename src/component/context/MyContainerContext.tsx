import { createContext, useContext } from 'react'

export interface MyContainerContextType {
    userId: number
}

export const MyContainerContext = createContext({} as MyContainerContextType)

function useMyContainerContext(): MyContainerContextType {
    return useContext(MyContainerContext)
}

export default useMyContainerContext
