import { useState } from 'react'

const App = () => {

  const handleClickGood = () => {
    setAverage(currentValue => currentValue + 1)
    setGood(currentValue => currentValue + 1)
    setAll(currentValue => currentValue + 1)
    
  }
  const handleClickNeutral = () => {
    setNeutral(currentValue => currentValue + 1)
    setAll(currentValue => currentValue + 1)
  }
  const handleClickBad = () => {
    setAverage(currentValue => currentValue - 1)
    setBad(currentValue => currentValue + 1)
    setAll(currentValue => currentValue + 1)
  }

  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleClickGood}>good</button>
      <button onClick={handleClickNeutral}>neutral</button>
      <button onClick={handleClickBad}>bad</button>
      <h1>statistics</h1>
      <p style={{margin:0}}>good {good}</p>
      <p style={{margin:0}}>neutral {neutral}</p>
      <p style={{margin:0}}>bad {bad}</p>
      <p style={{margin:0}}>all {all}</p>
      <p style={{margin:0}}>average {(all === 0 ? 0 : average / all)}</p>
      <p style={{margin:0}}>positive {(all === 0 ? 0 :(good*100)/all)}%</p>
    </div>
  )
}

export default App