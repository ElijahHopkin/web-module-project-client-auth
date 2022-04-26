import React, {useEffect} from 'react'
import axios from 'axios';
import {useHistory} from 'react-router-dom'


function Logout () {

    const {push} = useHistory()
    const oldToken = localStorage.getItem('token')

    useEffect(() => {
        axios.post('http://localhost:9000/api/logout', null,
        {headers:{authorization: localStorage.getItem('token')}
    })
        .then(res => {
            localStorage.removeItem('token')
            push('/login')
        })
        .catch(err => {
            console.log({err})
        })
    }, [])


    return(
        <div></div>
    )
}

export default Logout