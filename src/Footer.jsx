import React from 'react'

const Footer = () => {
  return (
    <footer className='d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top'>
    <p class="col-md-4 mb-0 text-body-secondary">© 2024 Casa de Papel, SA</p>

    <ul class="nav col-md-4 justify-content-end">
      <li class="nav-item"><a href="https://www.linkedin.com/" target='blank' class="nav-link px-2 text-body-secondary">LinkedIn</a></li>
      <li class="nav-item"><a href="https://www.instagram.com" target='blank' class="nav-link px-2 text-body-secondary">Instagram</a></li>
      <li class="nav-item"><a href="#Inicio" class="nav-link px-2 text-body-secondary">Inicio</a></li>
      <li class="nav-item"><a href="#Servicios" class="nav-link px-2 text-body-secondary">Servicios</a></li>
      <li class="nav-item"><a href="#" target='blank' class="nav-link px-2 text-body-secondary">Contacto</a></li>
    </ul>
  </footer>
  )
}

export default Footer