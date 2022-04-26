import React, {useState} from 'react'
import axios from 'axios'
import {useHistory} from 'react-router-dom'

function Login () {
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    })

    const onChange = (e) => {
        const {name, value} = e.target
        setCredentials({
            ...credentials,
            [name] : value
        })

    }

    const {push} = useHistory()

    const onSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:9000/api/login', credentials)
        .then(res => {
            localStorage.setItem('token', res.data.token)
            push('/friends')
        })
        .catch(err => {
            console.log({err})
        })
    }

    return(
        <>
        <h1>LOGIN</h1>
        <form onSubmit = {onSubmit}>
            <label /> USERNAME
            <input 
            name = 'username'
            type = 'text'
            value = {credentials.username}
            onChange = {onChange}
            placeholder = 'username'
            />
            <label /> PASSWORD
            <input 
            name = 'password'
            type = 'password'
            value = {credentials.password}
            onChange ={onChange}
            placeholder = 'password'
            />
            <button>Submit</button>
        </form>
        </>
    )
}


export default Login