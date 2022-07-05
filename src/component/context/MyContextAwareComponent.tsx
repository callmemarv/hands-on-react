import React from 'react'
import useMyContainerContext from './MyContainerContext'

function MyContextAwareComponent(): JSX.Element {
    const context = useMyContainerContext()

    return (
        <>{context.userId}</>
    )
}

export default MyContextAwareComponent
