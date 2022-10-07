import React, { useState } from "react";
import swal from "sweetalert";

export default function UserUpdate(props) {

    const {users, setUsers, currentUser, setCurrentUser} = props

    const changeInfo = (e) => {
        if (e) {
            setCurrentUser({
                ...currentUser,
                [e.target.name]: e.target.value,
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // auxArray.push(newUser)
        // setUsers(auxArray)
        let userToAdd = {
            user_name: currentUser.user_name,
            user_phone: currentUser.user_phone,
            user_email: currentUser.user_email,
            user_image: currentUser.user_image
        }
        // setUsers([...users, userToAdd])
        console.log([...users, userToAdd])
        swal("Actualizado!", `Actualizaste al usuario ${currentUser.user_email} con éxito`, "success");
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
                            value={currentUser.user_name}
                            onChange={changeInfo}
                        />
                    </li>
                    <li>
                        <label>Teléfono</label>
                        <input
                            placeholder="Ingrese teléfono..."
                            name="user_phone"
                            type="text"
                            value={currentUser.user_phone}
                            onChange={changeInfo}
                        />
                    </li>
                    <li>
                        <label>Email</label>
                        <input
                            placeholder="Ingrese email..."
                            name="user_email"
                            type="text"
                            value={currentUser.user_email}
                            onChange={changeInfo}
                        />
                    </li>
                </ul>
                <button type="submit">GUARDAR CAMBIOS</button>
            </form>
        </>
    )

}