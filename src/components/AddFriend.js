import React, {useState} from 'react';
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import axiosWithAuth from '../helpers/AxiosWAuth';

/* 
There are a number of ways to create a Protected Route.
1. you can create an if statement at the top of the component that will immediately redirect you if the token doesn't exist.
2. you can write similar logic in the JSX as a ternary (more or less like this...) -- does the token exist in localStorage? if so then display the following JSX: if not then redirect back to '/login'
3. you can also build a separate helper component that is stateless. Probably preferred--because it is infinitely resusable. You'll see two different forms applied on the App component. In the end it will likely require less typing after a couple dozen components that are all protected.
*/
function AddFriend() {
    const [form, setForm] = useState({
        name: '',
        email: ''
    })
    const {push} = useHistory()

    // if(!window.localStorage.getItem('token')){
    //     push('/login')
    // }


    
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
        axiosWithAuth().post('http://localhost:9000/api/friends', newFriend)
        /* TWO WAYS TO DO THIS. ABOVE AND BELOW. Above is much more reuseable...*/
        
        // axios.post('http://localhost:9000/api/friends',newFriend, {
        //     headers: { authorization:localStorage.getItem('token')}
        // } )
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