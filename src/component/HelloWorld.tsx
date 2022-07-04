import React from 'react'
import MyButton from './button/MyButton'

function HelloWorld(): JSX.Element {
    const content = 'Hello world'

    function handleClickButton(): void {
        alert('Thank you')
    }

    return (
        <>
            <p>{content}</p>
            <MyButton label={'Click me'} onClick={handleClickButton}/>
        </>
    )
}

export default HelloWorld
