import React, { useState } from 'react'

const FormProyectos = () => {
    const [state, setState] = useState('none')
    // nombre completo, comuna, mail, teléfono, mensaje o proyecto que requiere cotizar, el botón enviar cotización, posterior al pinchar el botón enviar debe mostrar un mensaje al cliente que la solicitud fue enviada con éxito 
  return (
    
    <form className='container-fluid' action='#'>
        
        <div className='form-group'>
            <label className='form-label'>Nombre Completo</label>
            <input type="text" className='form-control' />
        </div>
        <div className="row">
            <div className='form-group col'>
                <label className='form-label'>Comuna</label>
                <input type="text" className='form-control' />
            </div>
            <div className='form-group col'>
                <label className='form-label'>Telefono</label>
                <input type="text" className='form-control' />
            </div>
        </div>
        <div className='form-group'>
            <label className='form-label'>Mensaje</label>
            <textarea type="text" className='form-control' placeholder='Describa el proyecto a realizar' rows={5}/>
        </div>
        <div className='bg-info-subtle mt-2 p-3' style={{display: state}}>El mensaje ha sido enviado con exito, nos comunicaremos con usted pronto</div>
        <div className="row p-2">
            <button className='btn btn-success btn-lg' type='button' onClick={() => setState('block')}>Enviar mensaje</button>
        </div>
    </form>
  )
}

export default FormProyectos