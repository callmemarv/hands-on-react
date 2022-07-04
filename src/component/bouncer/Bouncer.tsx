import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Bouncer(): JSX.Element {
    const navigate = useNavigate()

    // Moin
    useEffect(() => {
        navigate('/home')
    }, [navigate])

    return (
        <></>
    )
}

export default Bouncer
