import { useState } from 'react'
import Search from './Components/Search'
import NewPerson from './Components/NewPerson'
import Numbers from './Components/Numbers'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState({name:'', number:''})
  const [search, setSearch] = useState('')

  const addPerson = (event) =>{
    event.preventDefault()
    const newPerson = {name: newName.name, number: newName.number}
    const comparation = (element) => JSON.stringify(element.name) === JSON.stringify(newPerson.name)
    const alreadyExists = persons.some(comparation)
    if (alreadyExists){
      alert(`${newName.name} already exists`)
    } else {
      setPersons(persons.concat(newPerson))
      setNewName({name:'', number:''})
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