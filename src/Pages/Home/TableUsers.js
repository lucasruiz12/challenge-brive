import React, { useState } from 'react';

function TableUsers(props) {

  const { fakeUsers } = props
  const [loading, setLoading] = useState(true)

  setTimeout(() => {
    setLoading(false)
  }, 1000);

  return (
    <div className='table-container'>
      {loading ?
        <h2>Cargando</h2>
        :
        <table>
          <thead>
            <tr className='table-fields-name'>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Teléfono</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {fakeUsers.map((el, idx) => {
              return (
                <tr key={idx}>
                  <td>{el.user_name}</td>
                  <td>{el.user_email}</td>
                  <td>{el.user_phone}</td>
                  <td><button>a</button></td>
                </tr>
              )
            })
            }
          </tbody>
        </table>}
    </div>

    // <Table striped bordered hover size="sm">
    //   <thead>
    //     <tr>
    //       <th>#</th>
    //       <th>First Name</th>
    //       <th>Last Name</th>
    //       <th>Username</th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     <tr>
    //       <td>1</td>
    //       <td>Mark</td>
    //       <td>Otto</td>
    //       <td>@mdo</td>
    //     </tr>
    //     <tr>
    //       <td>2</td>
    //       <td>Jacob</td>
    //       <td>Thornton</td>
    //       <td>@fat</td>
    //     </tr>
    //     <tr>
    //       <td>3</td>
    //       <td colSpan={2}>Larry the Bird</td>
    //       <td>@twitter</td>
    //     </tr>
    //   </tbody>
    // </Table>
  );
}

export default TableUsers;