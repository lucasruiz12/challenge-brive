import React from 'react';

export default function UserDelete(props){

    const {currentUser, users, setUsers} = props

    const handleSubmit = (e) => {
        e.preventDefault();

        let newList = users.filter((el) => el.user_email !== currentUser.user_email)

        console.log(newList)
    }

    return(
        <>
        <label>Borrar a {currentUser.user_email}?</label>
        <button onClick={handleSubmit}>Borrar</button>
        </>
    )

}