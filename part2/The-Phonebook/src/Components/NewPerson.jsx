const NewPerson = ({addPerson, newName, setNewName}) =>{
  return(
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
  )
}

export default NewPerson