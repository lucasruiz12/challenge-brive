import React from 'react';
import UserDetail from './UserDetail';
import UserCreate from './UserCreate';
import UserUpdate from './UserUpdate';
import './style.css';

export default function ModalActions(props) {

    const { type, data, show, setShow, users, setUsers, currentUser, setCurrentUser, currentIndex, handleRefresh } = props

    return (
        <>
            {show ?
                type === "Create" ?
                    <UserCreate users={users} setUsers={setUsers} handleRefresh={handleRefresh} />
                    :
                    type === "Read" ?
                        <UserDetail setShow={setShow} data={data} />
                        :
                        type === "Update" ?
                            <UserUpdate users={users} setUsers={setUsers} currentUser={currentUser} setCurrentUser={setCurrentUser} currentIndex={currentIndex} handleRefresh={handleRefresh}  />
                                :
                                null
                :
                null
            }
        </>
    );
}
