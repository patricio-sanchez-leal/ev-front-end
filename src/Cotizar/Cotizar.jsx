import React, { useState } from 'react'
import FormProyectos from './FormProyectos'

const Cotizar = () => {
  const [state, setState] = useState('')
  const cotizacion = () => {
    if (state === 'proyecto') {
      return <FormProyectos/>
    } else if (state === 'servicios') {
      return "Servicios"
    }
    return ""
  }
  return (
    <div id="Cotizar" className='container'>
        <div className="row text-center mb-5">
          <button onClick={() => setState('proyecto')} className='btn btn-lg btn-dark col col-md-5 m-2 m-md-auto p-2'>Cotizar Proyecto</button>
          <button onClick={() => setState('servicios')} className='btn btn-lg btn-dark col col-md-5 m-2 m-md-auto p-2'>Solicitar Servicios</button>
        </div>
        <div>
          {cotizacion()}
        </div>
    </div>
  )
}

export default Cotizar