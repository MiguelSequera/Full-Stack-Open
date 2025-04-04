import { useEffect, useState } from 'react'
import Search from './Components/Search'
import NewPerson from './Components/NewPerson'
import Numbers from './Components/Numbers'
import phoneNumbers from './services/phoneNumbers'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState({name:'', number:''})
  const [search, setSearch] = useState('')

  useEffect (() => {
    phoneNumbers.getNumber()
    .then (res => {setPersons (res.data)})
  }, [])

  const addPerson = (event) =>{
    event.preventDefault()
    const newPerson = {name: newName.name, number: newName.number}
    const comparation = (element) => JSON.stringify(element.name) === JSON.stringify(newPerson.name)
    const alreadyExists = persons.some(comparation)
    if (alreadyExists){
      alert(`${newName.name} already exists`)
    } else {
      phoneNumbers.postNumber(newPerson)
      .then (res => {
        setPersons(persons.concat(res.data))
        setNewName({name:'', number:''})
      })
    }

  }

  const handleChange = (e) => {
    setSearch(e.target.value)
  }
  
  const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase()))
  
  
  return (
    <div>
      <h2>Phonebook</h2>
      <Search 
        handleChange={handleChange}
        value={search}
      />
      <h3>Add a new</h3>
      <NewPerson
        addPerson={addPerson}
        newName={newName}
        setNewName={setNewName}
      />
      <h2>Numbers</h2>
      <Numbers
        filteredPersons={filteredPersons}
      />
    </div>
  )
}

export default App