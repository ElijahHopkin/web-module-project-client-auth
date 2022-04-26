import React, {useState} from 'react';
import axios from 'axios'
import {useHistory} from 'react-router-dom'


function AddFriend() {
    const [form, setForm] = useState({
        name: '',
        email: ''
    })
    const {push} = useHistory()

    if(!window.localStorage.getItem('token')){
        push('/login')
    }


    
    const onChange =(e) => {
        const {name, value} = e.target;
        setForm({
            ...form,
            [name]: value
        })
    }

    const onSubmit =(e) => {
        e.preventDefault()
        const newFriend = {
            name: form.name,
            email: form.email
        }
        axios.post('http://localhost:9000/api/friends',newFriend, {
            headers: { authorization:localStorage.getItem('token')}
        } )
        .then(res => {
            setForm({
                name: '',
                email:''
            })
        })
        .catch(err => {
            console.log({err})
        })
    }


    return (
        <div>
            <h3>FRIEND NAME</h3>
            <form onSubmit = {onSubmit}>
            <label /> USERNAME
            <input 
            name = 'name'
            type = 'text'
            value = {form.name}
            onChange = {onChange}
            placeholder = 'name'
            />
            <label /> FRIEND EMAIL
            <input 
            name = 'email'
            type = 'text'
            value = {form.email}
            onChange ={onChange}
            placeholder = 'email'
            />
            <button>Submit</button>
            </form>
        </div>
    )
}

export default AddFriend