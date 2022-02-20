import React,{useState, useEffect} from 'react'
import { getAllChars, searchChar, getChar } from '../functions/functions'
import '../../src/styles/busqueda.css'
const Busqueda = () => {
    
    const [allChars, setAllChars] = useState(null)
    const [filterChars, setFiltersChars] = useState(null)
    const [char, setChar] = useState(null)
    
    useEffect(()=>{
        getAllChars(setAllChars)
    },[])
  
    return (
    <div className='busqueda'>
        <div className='busqueda-header'>
            <input type="text"
             placeholder='Personaje a buscar'
             onChange={e=>{searchChar(allChars,e.target.value, setFiltersChars)}}
             />
             <p>Cantidad de resultados  - {filterChars != null ? filterChars.length : ''}</p>
             <div>
                 {filterChars != null ? (
                     <div>
                         {filterChars.map(char=>(
                             <p onClick={()=>{getChar(char.id, setChar)}} key={char.id}>{char.name}</p>
                         ))}
                     </div>
                 ): ('No hay ningun resultado')}
             </div>
        </div>

        <div className='busqueda-main'>
            {char != null ? (
                <div>
                    <h2>{char.name}</h2>
                    <img src={char.image} alt="imagen" />
                </div>
            ) : ('Selecciona un personaje')}
        </div>
    </div>
  )
}

export default Busqueda