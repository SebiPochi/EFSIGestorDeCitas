import './App.css';
import React, { useState } from 'react'
import Form from './components/Form';
import Cita from './components/Cita';
import Error from './components/Error';
import ListadoCitas from './components/ListadoCitas';

function App() {
  const [error, setError] = useState(false)
  const [citas, setCitas] = useState([])
  const [idIncremental, setIdIncremental] = useState(-1)
  
  function incrementarId() {
    setIdIncremental(idIncremental+1)
    return idIncremental+1
  }

  function crearCita(cita) {
    setCitas(current => [...current, cita])
  }

  function eliminarCita(cita) {
    const newCitas = citas
    let miCita = newCitas.find((c) => c.id === cita.id)
    miCita = {...miCita, eliminada: true }
    const newNewCitas = citas.filter((c) => c.id !== cita.id)
    newNewCitas.push(miCita)
    setCitas(newNewCitas)
  }

  // class Cita {
  //   constructor(cita) {
  //     this.nombreMascota = cita.nombreMascota;
  //     this.nombreDueno = cita.nombreDueno;
  //     this.fecha = cita.fecha;
  //     this.hora = cita.hora;
  //     this.sintomas = cita.sintomas;
  //   }
  // }

  return (
    !error ?
      (
        <div className="App">
          <h1>ADMINISTRADOR DE PACIENTES</h1>
            <div className="container">
                  <Form crearCita={crearCita} incrementarId={incrementarId} idIncremental={idIncremental}/>
                  <ListadoCitas Citas={citas} eliminarCita={eliminarCita} crearCita={crearCita}/>
            </div>
        </div>
      ) : (
      <Error/>
      )
  );
}

export default App;
