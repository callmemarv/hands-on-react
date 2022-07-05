import React from 'react'
import { MyContainerContext, MyContainerContextType } from './MyContainerContext'
import MyContextAwareComponent from './MyContextAwareComponent'

function MyContainer(): JSX.Element {
    const context: MyContainerContextType = { userId: 42 }

    return (
        <MyContainerContext.Provider value={context}>
            <MyContextAwareComponent/>
        </MyContainerContext.Provider>
    )
}

export default MyContainer
