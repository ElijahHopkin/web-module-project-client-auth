import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {useHistory} from 'react-router-dom'

function FriendsList () {

    const [friends, setFriends] = useState([])



    const {push} = useHistory()

    if(!window.localStorage.getItem('token')){
        push('/login')
    }

    const getData = () => {
        axios.get('http://localhost:9000/api/friends', {
            headers: {
                authorization: localStorage.getItem('token')
            }
        })
        .then(res => {
            setFriends(res.data)
        })
        .catch(err => {
            console.log({err})
        })
    }

    useEffect(() => {
        getData()
    }, [])

    return(
        <div>
            {/* {
                !window.localStorage.getItem('token') ? 
                push('/') : */}
                <>
            <h3>FRIENDS LIST</h3>
            <ul>
                {
                    friends.map(friend =>{ return (
                        <li key = {friend.id}>{friend.name} - {friend.email} </li>
                        )}
                        )}
            </ul>
            </>
                     {/* } */}
        </div>
    )
}

export default FriendsList