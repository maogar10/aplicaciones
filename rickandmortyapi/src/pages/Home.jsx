import React from 'react'
import '../../src/styles/home.css'
import imagenLogo from '../assets/images/header_image.webp'
const Home = () => {
  return (
   <>
      <header className='home-header'>
      <img className='home-header--image' src={imagenLogo} alt="" />
      <h1 className='home-header--title'>Bienvenidos a la aplicación de ejemplo de Rick And Morty API</h1>
      </header>
      <section className='home-section'>
        <p>Primero me gustaría dar las gracias a todas las 
          personas que apoyan estos proyectos, y sobre todo 
          el canal de Youtube de Codificandolo.
        </p>
        <p>
          Quiero decir que esta aplicación es tan solo un ejemplo
          para todas aquellas personas que siguien el canal y quieren
          o les gustaria tener el código para poder trastearlo ellos mismo
          no tiene ningun animo de lucro y tan solo representa eso.
          Una simple muestra de código.
        </p>
        <p>Quiero recordar las tecnologías empleadas para llevar acabo esta aplicación.</p>
        <ul>
          <li>HTML 5</li>
          <li>CSS3</li>
          <li>Javascript</li>
          <li>React
          </li>
        </ul>
        <hr />
        <p>Pasemos a ver que podemos hacer con esta sencilla aplicación:</p>
        <ul>
          <li>
            <a href="/listado">Listar todos los personajes</a>
          </li>
          <li>
            <a href="/busqueda">Buscar un personajes</a>
          </li>
        </ul>
      </section>
   </>
  )
}

export default Home