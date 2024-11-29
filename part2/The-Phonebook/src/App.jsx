import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addPerson = (event) =>{
    event.preventDefault()
    const newPerson = {name: newName}
    const comparation = (element) => JSON.stringify(element) === JSON.stringify(newPerson)
    const alreadyExists = persons.some(comparation)
    if (alreadyExists){
      alert(`${newName} already exists`)
    } else {
      setPersons(persons.concat(newPerson))
      setNewName('')
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input 
                  value={newName}
                  onChange={(e)=>setNewName(e.target.value)}
                />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>{persons.map(person => <li key={person.name}>{person.name}</li>)}</div>
    </div>
  )
}

export default App