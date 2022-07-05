import './App.css';
import React, { useState } from 'react'
import Form from './components/Form';
import Cita from './components/Cita';
import Error from './components/Error';
import ListadoCitas from './components/ListadoCitas';
function App() {
  const [error, setError] = useState(false)
  

  return (
    !error ?
      (
        <div className="App">
          <h1>ADMINISTRADOR DE PACIENTES</h1>
            <div className="container">
                  <Form/>
                  <ListadoCitas/>
            </div>
        </div>
      ) : (
      <Error/>
      )
  );
}

export default App;
