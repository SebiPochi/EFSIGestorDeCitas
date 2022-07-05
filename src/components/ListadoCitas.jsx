import React from 'react'
import Cita from './Cita'
import '../App.css';

const ListadoCitas = () => {
  return (
    <div className='pl-3'>
        <h2>Administra tus citas</h2>
        <div className='lista-citas'>
            <Cita/>
            <Cita/>
            <Cita/>
            <Cita/>
        </div>
    </div>
  )
}

export default ListadoCitas