import React, { useState } from 'react';
import ModalActions from '../../Components/ModalActions';
import Loading from './Loading';

function TableUsers(props) {

  const { fakeUsers } = props
  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [currentUser, setCurrentUser] = useState("")
  const [show, setShow] = useState(false)
  const [users, setUsers] = useState(fakeUsers)

  let auxArray = []

  setTimeout(() => {
    setLoading(false)
  }, 2000);

  const handleClick = (type, data) => {
    switch (type) {
      case "Agregar":
        setShowModal("Create")
        setShow(true)
        auxArray = users
        auxArray.push({
          user_name: "Mateo",
          user_email: "mateo@mail.com",
          user_phone: "3852519"
        })
        setUsers(auxArray)
        break;
      case "Ver":
        setShowModal("Read")
        setCurrentUser(data)
        setShow(true)
        break;
      case "Editar":
        setShowModal("Update")
        setCurrentUser(data)
        setShow(true)
        break;
      case "Eliminar":
        setShowModal("Delete")
        setCurrentUser(data)
        setShow(true)
        break;
      default:
        break;
    }
  }

  const handleRefresh = () => {
    console.log("Refresh")
    setLoading(true)
  }

  return (
    <div className='table-container'>
      <br />
      {loading ?
        <Loading />
        :
        <>
          <div>
            <button className='btn-action' onClick={() => handleClick("Agregar")}>AGREGAR</button>
            <button className='btn-action' onClick={handleRefresh}>ACTUALIZAR</button>
          </div>
          <table className='table'>
            <thead>
              <tr className='table-fields-name'>
                <th>Nombre</th>
                <th>Teléfono</th>
                <th>Email</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {fakeUsers.map((el, idx) => {
                return (
                  <tr key={idx}>
                    <td>{el.user_name}</td>
                    <td>{el.user_phone}</td>
                    <td>{el.user_email}</td>
                    <td>
                      <div>
                        <button className='btn-action' onClick={() => handleClick("Ver", el)}>Ver</button>
                        <button className='btn-action' onClick={() => handleClick("Editar", el)}>Editar</button>
                        <button className='btn-action' onClick={() => handleClick("Eliminar", el)}>Eliminar</button>
                      </div>
                    </td>
                  </tr>
                )
              })
              }
            </tbody>
          </table>
          {
            showModal ?
              <ModalActions type={showModal} data={currentUser} show={show} setShow={setShow} />
              :
              null
          }
        </>
      }
    </div>
  );
}

export default TableUsers;