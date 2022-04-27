import React, {useEffect} from 'react'
import axios from 'axios';
import {useHistory} from 'react-router-dom'
import axiosWithAuth from '../helpers/AxiosWAuth';


function Logout () {

    const {push} = useHistory()
    const oldToken = localStorage.getItem('token')

    useEffect(() => {
        axiosWithAuth().post('http://localhost:9000/api/logout', null)
        /* Above is a shorter way to apply this. Build axiosWithAuth() in a separate component and you can simply import this line. MUCH more reuseable code. Of course, what is below is satisfactory as well... it will just get tedious with a lot of components.*/
        
    //     axios.post('http://localhost:9000/api/logout', null,
    //     {headers:{authorization: localStorage.getItem('token')}
    // })
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