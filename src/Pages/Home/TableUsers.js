import React, { useState } from 'react';
import ModalActions from '../../Components/ModalActions';
import Loading from './Loading';
import swal from 'sweetalert';

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

  const deleteFunction = (data) => {
    swal({
      title: "Estás seguro?",
      text: `Vas a eliminar al cliente ${data.user_email}`,
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          let newList = users.filter((el) => el.user_email !== data.user_email)
          setUsers(newList)
          console.log(users)
          swal("Eliminado!", `Eliminaste al usuario ${data.user_email} con éxito`, "success");
        } else {
          swal("Tu cliente no fue eliminado...");
        }
      });
  }

  const handleClick = (type, data) => {
    switch (type) {
      case "Agregar":
        setShowModal("Create")
        setShow(true)
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
        deleteFunction(data)
        break;
      default:
        break;
    }
  }

  const handleRefresh = () => {
    console.log("Refresh")
    setLoading(true)
    setShow(false)
  }

  return (
    <div className='table-container'>
      <br />
      {loading ?
        <Loading />
        :
        <>
          <div>
            <h2>Lista de clientes</h2>
            <hr style={{ fontSize: "8px" }} />
            <div>
              <br />
              <button className='btn-action' onClick={() => handleClick("Agregar")}>AGREGAR</button>
              <button className='btn-action' onClick={handleRefresh}>ACTUALIZAR</button>
              <br />
              <br />
            </div>
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
              {users.map((el, idx) => {
                return (
                  <tr key={idx}>
                    <td>{el.user_name}</td>
                    <td>{el.user_phone}</td>
                    <td>{el.user_email}</td>
                    <td>
                      <div className='btn-group'>
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
              <ModalActions type={showModal} data={currentUser} show={show} setShow={setShow} users={users} setUsers={setUsers} currentUser={currentUser} setCurrentUser={setCurrentUser} />
              :
              null
          }
        </>
      }
    </div>
  );
}

export default TableUsers;