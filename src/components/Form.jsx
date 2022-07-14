import React, { useState } from 'react'
import '../App.css';

const Form = ({crearCita, incrementarId, idIncremental}) => {

  const [id, setId] = useState(-1)
  const [citaForm, setCitaForm] = useState({
    id: id,
    nombreMascota: "",
    nombreDueno: "",
    fecha: "",
    hora: "",
    sintomas: "",
    eliminada: false,
  })

  function onClickFunction(){
    setId(id+1)
    const newId = id+1
    console.log(id);
    crearCita({
      ...citaForm,
      id: newId
    })
  }

  return (
    <div className="one-half column">
      <h2>Crear mi Cita</h2>
        <label>Nombre Mascota</label>
        <input type="text" name="nombreMascota" value={citaForm.nombreMascota} onChange={e => setCitaForm({...citaForm, nombreMascota: e.currentTarget.value})} className="u-full-width" placeholder="Nombre Mascota" />
        <label>Nombre Dueño</label>
        <input type="text" name="nombreDueno" value={citaForm.nombreDueno} onChange={e => setCitaForm({...citaForm, nombreDueno: e.currentTarget.value})} className="u-full-width" placeholder="Nombre dueño de la mascota" />
        <label>Fecha</label>
        <input type="date" name="fecha" value={citaForm.fecha} onChange={e => setCitaForm({...citaForm, fecha: e.currentTarget.value})} className="u-full-width" />
        <label>hora</label>
        <input type="time" name="hora" value={citaForm.hora} onChange={e => setCitaForm({...citaForm, hora: e.currentTarget.value})} className="u-full-width" />
        <label>Sintomas</label>
        <textarea name="sintomas" value={citaForm.sintomas} onChange={e => setCitaForm({...citaForm, sintomas: e.currentTarget.value})} className="u-full-width text-area-sintoma"></textarea>
        <button  className="u-full-width button-primary" onClick={() => onClickFunction()}>Agregar Cita</button>
    </div>
  )
}

export default Form