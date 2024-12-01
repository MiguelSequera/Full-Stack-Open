import { useState } from 'react'

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
      <div>
        filter show with
        <input  
          type='text'
          value={search}
          onChange={handleChange}
        />
      </div>
      <form onSubmit={addPerson}>
        <div>
          name: <input 
                  value={newName.name}
                  onChange={(e)=>setNewName({name:e.target.value, number:newName.number})}
                />
        </div>
        <div>
          number: <input 
                  value={newName.number}
                  onChange={(e)=>setNewName({name:newName.name,number:e.target.value})}
                />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {filteredPersons.map(filteredPerson => <li key={filteredPerson.name}>{filteredPerson.name} {filteredPerson.number}</li>)}
       </div>
    </div>
  )
}

export default App