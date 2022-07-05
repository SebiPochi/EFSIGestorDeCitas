import React from 'react'
import '../App.css';

const Cita = () => {
  return (
    <div className="one-half">
        <div className="cita">
            <p>Mascota: <span>Nina</span></p>
            <p>Dueño: <span>Martin</span></p>
            <p>Fecha: <span>2021-08-05</span></p>
            <p>Hora: <span>08:20</span></p>
            <p>Sintomas: <span>Le duele la pierna</span></p>
            <button className="button elimnar u-full-width">Eliminar ×</button>
        </div>
    </div>
  )
}

export default Cita