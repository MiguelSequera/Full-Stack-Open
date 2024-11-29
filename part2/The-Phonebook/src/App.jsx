import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1234567'},
  ]) 
  const [newName, setNewName] = useState({name:'', number:''})

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

  return (
    <div>
      <h2>Phonebook</h2>
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
      <div>{persons.map(person => <li key={person.name}>{person.name} {person.number}</li>)}</div>
    </div>
  )
}

export default App