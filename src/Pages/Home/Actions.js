import React from 'react';
import { BsFillXCircleFill, BsArrowRepeat, BsFillUnlockFill } from "react-icons/bs";


export default function Actions(props) {

    const [row, setCurrentData, setShowModalUserDetail, setShowModalCameraDetail, setShowModalUserUpdate, setShowModalCameraUpdate, setShowModalUserDelete, setShowModalCameraDelete] = props.data;

    return (
        <div style={{ display: "flex", justifyContent: "space-around" }}>
            <BsFillUnlockFill data-toggle="tooltip" data-placement="top" title="Reestablecer contraseña" className="actionBtn" style={{ color: "black" }} onClick={() => {
                // setCurrentData(row)
                // if (row.user_nicename) {
                //     setShowModalUserDetail(true)
                // }
                // if (row.dns_ip) {
                //     setShowModalCameraDetail(true)
                // }
            }} />
            <BsArrowRepeat data-toggle="tooltip" data-placement="top" title="Actualizar usuario" className="actionBtn" style={{ color: "rgba(82,167,226,1)" }} onClick={() => {
                // setCurrentData(row)
                // if (row.user_nicename) {
                //     setShowModalUserUpdate(true)
                // }
                // if (row.dns_ip) {
                //     setShowModalCameraUpdate(true)
                // }
            }} />
            <BsFillXCircleFill data-toggle="tooltip" data-placement="top" title="Eliminar usuario" className="actionBtn" style={{ color: "red" }} onClick={() => {
                // setCurrentData(row)
                // if (row.user_nicename) {
                //     setShowModalUserDelete(true)
                // }
                // if (row.dns_ip) {
                //     setShowModalCameraDelete(true)
                // }
            }} />
        </div>
    )
}