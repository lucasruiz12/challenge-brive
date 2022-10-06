import React, { useState } from 'react';


export default function UserDetail(props) {

  const { setShow, data } = props
  // const [loading, setLoading] = useState(true)

  const hideCard = () => {
    setShow(false)
  }

  return (
    <>
      <div className='card'>
        <div className='card-info'>
          <img className='card-img' src='https://s36496.pcdn.co/wp-content/uploads/2017/11/9-si-foto-cv.png' alt="noimg" />
          <div>
            <p>
              Nombre: {data.user_name}
            </p>
            <p>
              Teléfono: {data.user_phone}
            </p>
            <p>
              Email: {data.user_email}
            </p>
          </div>
        </div>
        <button className='btn-action' onClick={hideCard}>CERRAR</button>
      </div>
    </>
  );
}