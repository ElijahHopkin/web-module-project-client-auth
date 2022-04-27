import React, {useState, useEffect} from 'react';
import axios from 'axios'
import axiosWithAuth from '../helpers/AxiosWAuth';

/* 
There are a number of ways to create a Protected Route.
1. you can create an if statement at the top of the component that will immediately redirect you if the token doesn't exist. (lines 18-22, right now.)
2. you can write similar logic in the JSX as a ternary (more or less like this...) -- does the token exist in localStorage? if so then display the following JSX: if not then redirect back to '/login'. This is in lines 44-46, and 57 right now. Remember that you'll need to have the whole ternary held in a single div or an empty element...
3. you can also build a separate helper component that is stateless. Probably preferred--because it is infinitely reusable. You'll see two different forms applied on the App component. In the end it will likely require less typing after a couple dozen components that are all protected.
*/
function FriendsList () {

    const [friends, setFriends] = useState([])



    // const {push} = useHistory()

    // if(!window.localStorage.getItem('token')){
    //     push('/login')
    // }

    const getData = () => {
        axiosWithAuth().get('http://localhost:9000/api/friends')
        /* Two ways to accomplish this call. ABOVE AND BELOW. Above is shorter, by pulling in a stateless component elsewhere that has already created the header for me.*/
        
        // axios.get('http://localhost:9000/api/friends', {
        //     headers: {
        //         authorization: localStorage.getItem('token')
        //     }
        // })
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