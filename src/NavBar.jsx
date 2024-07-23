import React from 'react'

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-md navbar-dark bg-dark px-2 sticky-top">
        <a class="navbar-brand text-light">La Casa de Papel</a>
        <button class="navbar-toggler navbar-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
            <li class="nav-item active">
                <a class="nav-link" href="#Inicio">Inicio</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#Servicios">Servicios</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#Cotizar">Cotizar</a>
            </li>
            </ul>
        </div>
    </nav>
  )
}

export default NavBar