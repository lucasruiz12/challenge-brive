import React, { useEffect, useState } from 'react';


export default function UserDetail(props) {

  const { setShow, data } = props
  const [loading, setLoading] = useState(true)

  const hideCard = () => {
    setShow(false)
  }

  if (loading) {
    setTimeout(() => {
      setLoading(false)
    }, 500);
  }

  useEffect(() => {
    setLoading(true)
  }, [data])

  return (
    <>
      {
        loading ?
          null
          :
          <div className='card'>
            <div className='card-info'>
              <img className='card-img' src={data.user_image} alt="noimg" />
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
      }
    </>
  );
}