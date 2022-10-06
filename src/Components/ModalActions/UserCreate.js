import React, { useState } from 'react'

export default function UserCreate(props) {

    const { users, setUsers } = props;
    // let auxArray = users;

    const [newUser, setNewUser] = useState({
        user_name: "",
        user_phone: "",
        user_email: "",
        user_image: 0
    })

    const changeInfo = (e) => {
        if (e) {
            setNewUser({
                ...newUser,
                [e.target.name]: e.target.value,
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // auxArray.push(newUser)
        // setUsers(auxArray)
        let userToAdd = {
            user_name: newUser.user_name,
            user_phone: newUser.user_phone,
            user_email: newUser.user_email,
            user_image: newUser.user_image
        }
        // setUsers([...users, userToAdd])
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <ul>
                    <li>
                        <label>Nombre</label>
                        <input
                            placeholder="Ingrese nombre..."
                            name="user_name"
                            type="text"
                            value={newUser.user_name}
                            onChange={changeInfo}
                        />
                    </li>
                    <li>
                        <label>Teléfono</label>
                        <input
                            placeholder="Ingrese teléfono..."
                            name="user_phone"
                            type="text"
                            value={newUser.user_phone}
                            onChange={changeInfo}
                        />
                    </li>
                    <li>
                        <label>Email</label>
                        <input
                            placeholder="Ingrese email..."
                            name="user_email"
                            type="text"
                            value={newUser.user_email}
                            onChange={changeInfo}
                        />
                    </li>
                </ul>
                <button type="submit">AGREGAR</button>
            </form>
        </>
    )
}