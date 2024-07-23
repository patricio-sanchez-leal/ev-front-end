import React from 'react'
import inicio_img from './imagenes/inicio.jpg'

const Inicio = () => {
  return (
    <div id="Inicio">
        <div className="container-fluid m-0 p-0">

        <div className='row'>
        <img src={inicio_img} className='img-fluid col-12 col-md-6' />
        <div className="col">
        <h1 className='h1 p-3 mb-lg-5 text-center'>Tu hogar, nuestra misión <br/><small className='text-muted'>La Casa de Papel</small></h1>
        <div className="row p-3 text-center">
            <h2 className='h2'>¿Quienes Somos?</h2>
            <p className='p'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore earum quas ullam explicabo et, adipisci eos dignissimos quaerat. Dolor corrupti quidem at adipisci dignissimos eaque,
            </p>
        </div>
        
        </div>
        </div>
        </div>
    </div>
  )
}

export default Inicio