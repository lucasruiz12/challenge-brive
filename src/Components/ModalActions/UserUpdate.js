import React, { useState } from "react";
import swal from "sweetalert";

export default function UserUpdate(props) {

    const { users, setUsers, currentUser, setCurrentUser, currentIndex, handleRefresh } = props

    const [loading, setLoading] = useState(true)
    const auxArray = users

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
        let userToAdd = {
            user_name: currentUser.user_name,
            user_phone: currentUser.user_phone,
            user_email: currentUser.user_email,
            user_image: currentUser.user_image
        }

        auxArray.map((el, idx) => {
            if (idx === currentIndex) {
                auxArray[idx] = userToAdd;
                setUsers(auxArray)
            }
        })

        swal("Actualizado!", `Actualizaste al usuario ${userToAdd.user_email} con éxito`, "success").then((response) =>
            handleRefresh()
        );
    }

    if (loading) {
        setTimeout(() => {
            setLoading(false)
        }, 500);
    }

    return (
        <>
            {loading ?
                null
                :
                <form onSubmit={handleSubmit} className='form'>
                    <div className='form-card'>
                        <ul>
                            <li className='items-form'>
                                <input
                                    placeholder="Ingrese nombre..."
                                    name="user_name"
                                    type="text"
                                    value={currentUser.user_name}
                                    onChange={changeInfo}
                                />
                            </li>
                            <li className='items-form'>
                                <input
                                    placeholder="Ingrese teléfono..."
                                    name="user_phone"
                                    type="text"
                                    value={currentUser.user_phone}
                                    onChange={changeInfo}
                                />
                            </li>
                            <li className='items-form'>
                                <input
                                    placeholder="Ingrese email..."
                                    name="user_email"
                                    type="email"
                                    value={currentUser.user_email}
                                    onChange={changeInfo}
                                />
                            </li>
                        </ul>
                        <button style={{ borderRadius: "0.35rem", padding: "0.4rem", cursor: "pointer", margin: "1rem" }} type="submit"
                        >ACTUALIZAR</button>
                    </div>
                </form>}
        </>
    )

}