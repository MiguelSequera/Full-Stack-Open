import axios from "axios"

const url = 'http://localhost:3001/persons'


const getNumber = () => {
  return axios.get (url)  
    
}

const postNumber = newPerson => {
  return axios.post (url, newPerson)
}

export default {
  getNumber,
  postNumber
}