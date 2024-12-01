const Numbers = ({filteredPersons}) => {
  return (
    <div>
      {filteredPersons.map(filteredPerson => <li key={filteredPerson.name}>{filteredPerson.name} {filteredPerson.number}</li>)}
   </div>
  )
}

export default Numbers