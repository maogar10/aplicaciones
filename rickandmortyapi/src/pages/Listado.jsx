import React,{useEffect, useState} from 'react'
import '../../src/styles/listado.css'
import { getAllInfo, getChar, dateParse } from '../functions/functions'
const Listado = () => {
    const [url, setUrl] = useState('https://rickandmortyapi.com/api/character/?page=1')
    const [info, setInfo] = useState(null)
    const [prev, setPrev] = useState(null)
    const [next, setNext] = useState(null)
    const [chars, setChars] = useState(null)
    const [char, setChar] = useState(null)
    useEffect(()=>{
        getAllInfo(url, setInfo, setNext, setPrev, setChars)
    },[url])
  return (
    <>
        <header className='header-listado'>
            <h2>Aquí podras encontrar un listado de todos los personajes.</h2>
            <p>Este listado contiene una paginación ya que hay un total de {info != null ? info.count : ''} divididos por {info != null ? info.pages : ''} páginas</p>
            <p>Pulsa sobre siguiente o anterior para desplazarte por el listado de personajes y si quieres 
                información más detallada de estos pulsa sobre su nombre para poder visualizarla.
            </p>
            {prev != null ? (
                <button onClick={()=> setUrl(prev)}>anteriors</button>    
            ) : ''}
            
            {next != null ? (
                <button onClick={()=> setUrl(next)}>siguientes</button>    
            ) : ''}
        </header>
        <main className='main-listado'>
            <div className='listado'>
                {chars != null ? (
                    chars.map(char=>(
                        <p onClick={()=>getChar(char.id, setChar)} key={char.id}>{char.name}</p>
                    ))
                ): ''}
            </div>
            <div className='personaje'>
                {char != null ? (
                    <div>
                        <h2>{char.name}</h2>
                        <img src={char.image} alt="" />
                        <p>Especie : {char.species}</p>
                        <p>Estado : {char.status}</p>
                        <p>Tipo : {char.type}</p>
                        <p>Origen : {char.origin.name}</p>
                        <p>{dateParse(char)}</p>
                    </div>
                ) : 'No hay personaje seleccionado'}
            </div>
        </main>
    </>
  )
}

export default Listado