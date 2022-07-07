import React from 'react'
import '../App.css'

const Cita = ({ cita }) => {
  return (
    <div className="one-half">
        <div className="cita">
            <p>Mascota: <span>{cita.nombreMascota}</span></p>
            <p>Dueño: <span>{cita.nombreDueno}</span></p>
            <p>Fecha: <span>{cita.fecha}</span></p>
            <p>Hora: <span>{cita.hora}</span></p>
            <p>Sintomas: <span>{cita.sintomas}</span></p>
            <button className="button elimnar u-full-width">Eliminar ×</button>
        </div>
    </div>
  )
}

export default Cita