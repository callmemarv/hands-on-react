import React, { useEffect, useState } from 'react'
import { getContent } from './MyClient'

interface MyComponentProps {
    setProcessing: (value: boolean) => void
}

function MyComponent(props: MyComponentProps): JSX.Element {
    console.log('Rendering MyComponent')

    const [content, setContent] = useState(0)

    useEffect(() => {
        props.setProcessing(true)
        getContent()
            .then((result) => {
                setContent(result)
            })
            .finally(() => {
                props.setProcessing(false)
            })
    }, [props])

    return (
        <>{content}</>
    )
}

export default MyComponent
