import React from 'react'
import Cita from './Cita'
import '../App.css';

const ListadoCitas = ({ Citas }) => {
  return (
    <div className='pl-3'>
        <h2>Administra tus citas</h2>
        <div className='lista-citas'>
          {
            Citas.map(cita => <Cita cita={cita}/>)
          }
        </div>
    </div>
  )
}

export default ListadoCitas