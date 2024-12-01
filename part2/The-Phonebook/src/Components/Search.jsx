const Search = ({value, handleChange}) => {
  return(
    <div>
      filter show with
        <input  
          type='text'
          value={value}
          onChange={handleChange}
      />
    </div>
  )
}

export default Search