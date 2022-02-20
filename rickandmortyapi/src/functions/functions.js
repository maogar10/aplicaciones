import axios from "axios";

export const getAllInfo = async(url, setInfo, setNext, setPrev, setChars) => {
    const peticion = await axios.get(url)
    const {info, results} = await peticion.data
    info.prev != null ? setPrev(info.prev) : setPrev(null)
    setNext(info.next)
    setInfo(info)
    setChars(results)
}

export const getChar = async (id, setChar) => {
    const peticion = await axios(`https://rickandmortyapi.com/api/character/${id}`)
    setChar(peticion.data)
}

export const dateParse = char => {
    const date = new Date(char.created)
    return `Creado el ${date.getDay()} / ${date.getMonth()} / ${date.getFullYear()}`
}

export const getAllChars = async (setAllChars) => {
    let all = []
    let url = 'https://rickandmortyapi.com/api/character/?page=1'
    let i = {}
    do{
        let peticion = await axios.get(url)
        let {info, results} = await peticion.data
        all.push(results)
        i = info.next
        url = info.next
    } while(i != null)
    setAllChars(all.flat())
}

export const searchChar =  (chars, c, setFilterChars) => {
    let all = []
    chars.forEach(char=>{
        if(char.name.includes(c)){
            all.push(char)
        }
    })
    setFilterChars(all)
}