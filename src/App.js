import './App.css';
import React, { useState } from 'react'
import Form from './components/Form';
import Cita from './components/Cita';
import Error from './components/Error';
import ListadoCitas from './components/ListadoCitas';
function App() {
  const [error, setError] = useState(false)
  const [citas, setCitas] = useState([])

  function crearCita() {
    let citaACrear = new Cita("tuki")
    console.log(citaACrear)
    citas.push(citaACrear)
  }

  class Cita {
    constructor(nombreMascota) {
      this.nombreMascota = nombreMascota;
    }
  }

  return (
    !error ?
      (
        <div className="App">
          <h1>ADMINISTRADOR DE PACIENTES</h1>
            <div className="container">
                  <Form crearCita={crearCita}/>
                  <ListadoCitas Citas={citas} crearCita={crearCita}/>
            </div>
        </div>
      ) : (
      <Error/>
      )
  );
}

export default App;
