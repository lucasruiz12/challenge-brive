// import React from 'react'
// import { Modal, ModalBody, ModalFooter, ModalHeader } from 'react-bootstrap'

// export default function ModalActions(props) {

//     const { type, data, show } = props

//     console.log(show)

//     return (
//         <>
//             {show ?
//                 <Modal show={show}>
//                     <ModalHeader>HOLA</ModalHeader>
//                     <ModalBody>BODY</ModalBody>
//                     <ModalFooter>FOOTER</ModalFooter>
//                 </Modal>
//                 :

//                 <h2>MODAL para {type} a {data.user_name}</h2>
//             }
//         </>
//     )
// }

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import UserCard from '../UserCard';

export default function ModalActions(props) {

    const { type, data, show, setShow } = props

    const closeButton = () => {
        setShow(false)
    }

    return (
        <>
            {show ?
                <UserCard />
                :
                null
            }
        </>
    );
}
