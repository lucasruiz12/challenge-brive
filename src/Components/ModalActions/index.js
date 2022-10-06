import React from 'react';
import UserDetail from './UserDetail';
import './style.css';
import UserCreate from './UserCreate';
import UserUpdate from './UserUpdate';
import UserDelete from './UserDelete';

export default function ModalActions(props) {

    const { type, data, show, setShow, users, setUsers, currentUser, setCurrentUser } = props

    // const closeButton = () => {
    //     setShow(false)
    // }

    return (
        <>
            {show ?
                type === "Create" ?
                    <UserCreate users={users} setUsers={setUsers} />
                    :
                    type === "Read" ?
                        <UserDetail setShow={setShow} data={data} toLoad={true} />
                        :
                        type === "Update" ?
                            <UserUpdate users={users} setUsers={setUsers} currentUser={currentUser} setCurrentUser={setCurrentUser}  />
                            :
                            type === "Delete" ?
                                <UserDelete currentUser={currentUser} users={users} setUsers={setUsers} />
                                :
                                null
                :
                null
            }
        </>
    );
}
