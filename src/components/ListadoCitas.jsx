import React, { useEffect, useState } from 'react'
import Cita from './Cita'
import '../App.css';

const ListadoCitas = ({ Citas, eliminarCita }) => {

  //const citasFiltradas = Citas.filter(Citas => Citas.eliminda === false
  const [citasFiltradas, setCitasFiltradas] = useState([])
  useEffect(() => {
    setCitasFiltradas(Citas.filter(c => c.eliminada === false))
  },[Citas])

  useEffect(() => {
    console.log(citasFiltradas);
  },[citasFiltradas])

  return (
    <div className='pl-4'>
        <h2>Administra tus citas</h2>
        <div className='lista-citas'>
          {
            citasFiltradas.map(
              cita => <Cita cita={cita} eliminarCita={eliminarCita}/>)
          }
        </div>
    </div>
  )
}

export default ListadoCitas