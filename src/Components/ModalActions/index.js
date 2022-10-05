import React from 'react';
import UserDetail from './UserDetail';
import './style.css';

export default function ModalActions(props) {

    const { type, data, show, setShow } = props

    const closeButton = () => {
        setShow(false)
    }

    return (
        <>
            {show ?
                type === "Create" ?
                    <>
                    </>
                    :
                    type === "Read" ?
                        <UserDetail setShow={setShow} data={data} toLoad={true} />
                        :
                        type === "Update" ?
                            <></>
                            :
                            type === "Delete" ?
                                <></>
                                :
                                null
                :
                null
            }
        </>
    );
}
