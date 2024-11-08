import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  
  const handleClick = () => {
    const randomNumber = Math.floor(Math.random()*8)
    setSelected(randomNumber)
  }

  const handleClickVote = () => {
    const copy = { ...points }
    copy[selected] += 1 
    setPoint(copy)    
    setWinner((Object.keys(copy).reduce((a, b) => copy[a] > copy[b] ? a : b)))
  }

  const [selected, setSelected] = useState(0)
  const [points, setPoint] = useState({ 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0 })
  const [winner, setWinner] = useState (0)

  return (
    <div>
      <section>
        <h1>Anecdote of the day</h1>
        <p>{anecdotes[selected]}</p>
        <p>has {points[selected]}</p>
        <button onClick={handleClickVote}>
          vote
        </button>
        <button onClick={handleClick}>
          next anecdote
        </button>
      </section>
      <section>
        <h1>Anecdote with most votes</h1>
        <p>{anecdotes[winner]}</p>
        <p>has {points[winner]}</p>
      </section>
    </div>
  )
}

export default App