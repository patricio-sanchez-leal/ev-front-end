import React from 'react'
import { Card, CardBody, CardFooter, CardHeader, CardImg, CardTitle } from 'react-bootstrap'

const CartaServicio = (props) => {
  return (
    <Card className='col-5 col-lg-3 m-1 p-0'>
        <CardHeader>
            <CardTitle>{props.nombre}</CardTitle>
        </CardHeader>
        <CardBody>
            <CardImg src={props.imagen} className='img-fluid'/>
        </CardBody>
        <CardFooter>
            Precio por {props.unidad}: ${props.precio}
        </CardFooter>
    </Card>
  )
}

export default CartaServicio