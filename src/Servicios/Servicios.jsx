import React from 'react'
import CartaServicio from './CartaServicio'
import amurallado from '../imagenes/ladrillo.jpg'
import porton from '../imagenes/porton.jpg'
import pintura from '../imagenes/pintura.jpg'
import porcelanato from '../imagenes/porcelanato.jpg'
import ceramica from '../imagenes/ceramica.jpg'
import flotante from '../imagenes/piso flotante.jpg'
import vinilico from '../imagenes/vinilico.jpg'

const Servicios = () => {
  return (
    <div id='Servicios' className='container my-5'>
        <h2 className='h2 bg-light p-2'>Nuestros Servicios</h2>
        <div className="row justify-content-center">
        <CartaServicio nombre="Amurallado" imagen={amurallado} unidad={"metro"} precio={"30.000"}/>
        <CartaServicio nombre="Portones" imagen={porton} unidad={"metro"} precio={"50.000"}/>
        <CartaServicio nombre="Pintura (interior y exterior)" imagen={pintura} unidad={"metro cuadrado"} precio={"45.000"}/>
        <CartaServicio nombre="Porcelanato" imagen={porcelanato} unidad={"metro cuadrado"} precio={"60.000"}/>
        <CartaServicio nombre="Ceramica" imagen={ceramica} unidad={"metro cuadrado"} precio={"55.000"}/>
        <CartaServicio nombre="Piso flotante" imagen={flotante} unidad={"metro cuadrado"} precio={"45.000"}/>
        <CartaServicio nombre="Piso vinilico" imagen={ vinilico } unidad={"metro cuadrado"} precio={"45.000"}/>
        </div>
    </div>
  )
}

export default Servicios