import phoneNumbers from "../services/phoneNumbers"

const Numbers = ({filteredPersons, setPersons, persons}) => {
  return (
    <section>
      {filteredPersons.map(filteredPerson => 
      <div key={filteredPerson.name}>
        <li >
          {filteredPerson.name} 
          <span> </span>
          {filteredPerson.number}
        </li>
        <button 
          onClick={() => {
            if (window.confirm('Want to deleted it?')){
              phoneNumbers.deleteNumber (filteredPerson.id)
                .then (res => {
                  setPersons(persons.filter(p => p.id !== res.data.id))
                })
            }
            else{
              alert ('no deleted')
            }
          }}
        >
          delete
        </button>
      </div>  
      )}
   </section>
  )
}

export default Numbers