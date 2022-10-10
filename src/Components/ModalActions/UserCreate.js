import React, { useState } from 'react'
import swal from 'sweetalert';

export default function UserCreate(props) {

    const { users, setUsers, handleRefresh } = props;

    const [loading, setLoading] = useState(true)
    const [newUser, setNewUser] = useState({
        user_name: "",
        user_phone: "",
        user_email: "",
        user_image: "https://img-19.ccm.net/k17mPetcx5Vjofby7LMj61XTSOI=/300x/smart/d6f67f5cdba34e5297e6d8c47e384169/ccmcms-esccm/34211459.png"
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
        let userToAdd = {
            user_name: newUser.user_name,
            user_phone: newUser.user_phone,
            user_email: newUser.user_email,
            user_image: newUser.user_image
        }
        swal("Agregado!", `Agregaste al usuario ${newUser.user_email} con éxito!`, "success")
            .then((response) => {
                handleRefresh()
                setUsers([...users, userToAdd])
            });
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
                                    value={newUser.user_name}
                                    onChange={changeInfo}
                                />
                            </li>
                            {/* <br /> */}
                            <li className='items-form'>
                                <input
                                    placeholder="Ingrese teléfono..."
                                    name="user_phone"
                                    type="text"
                                    value={newUser.user_phone}
                                    onChange={changeInfo}
                                />
                            </li>
                            {/* <br /> */}
                            <li className='items-form'>
                                <input
                                    placeholder="Ingrese email..."
                                    name="user_email"
                                    type="email"
                                    value={newUser.user_email}
                                    onChange={changeInfo}
                                />
                            </li>
                        </ul>
                        <button style={{ borderRadius: "0.35rem", padding: "0.4rem", cursor: "pointer", margin: "1rem" }} type="submit" disabled={
                            newUser.user_name === "" ||
                            newUser.user_phone === "" ||
                            newUser.user_email === ""
                        }>AGREGAR</button>
                    </div>
                </form>}
        </>
    )
}