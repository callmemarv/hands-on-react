import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import MyButton from '../button/MyButton'

function NotHome(): JSX.Element {
    const navigate = useNavigate()

    function redirectHome(): void {
        navigate('/home')
    }

    return (
        <>
            <Link to={'home'}>I want to go home</Link>
            <br/><br/><br/><br/>
            <MyButton label={'I want to go home'} onClick={redirectHome}/>
        </>
    )
}

export default NotHome
