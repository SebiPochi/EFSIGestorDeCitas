import React from 'react'
import '../App.css';

const Form = () => {
  return (
    <div className="one-half column">
        <h2>Crear mi Cita</h2>
        <form>
        <label>Nombre Mascota</label>
        <input type="text" name="mascota" className="u-full-width" placeholder="Nombre Mascota"/>
        <label>Nombre Dueño</label>
        <input type="text" name="propietario" className="u-full-width" placeholder="Nombre dueño de la mascota"/>
        <label>Fecha</label>
        <input type="date" name="fecha" className="u-full-width"/>
        <label>hora</label>
        <input type="time" name="hora" className="u-full-width"/>
        <label>Sintomas</label>
        <textarea name="sintomas" className="u-full-width text-area-sintoma"></textarea>
        <button type="submit" className="u-full-width button-primary">Agregar Cita</button>
        </form>
    </div>
  )
}

export default Form