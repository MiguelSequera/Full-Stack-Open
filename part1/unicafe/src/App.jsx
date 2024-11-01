import { useState } from 'react'

const App = () => {

  const handleClickBad = () => {
    setBad(currentValue => currentValue + 1)
  }
  const handleClickNeutral = () => {
    setNeutral(currentValue => currentValue + 1)
  }
  const handleClickGood = () => {
    setGood(good => good + 1)
  }
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleClickGood}>good</button>
      <button onClick={handleClickNeutral}>neutral</button>
      <button onClick={handleClickBad}>bad</button>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </div>
  )
}

export default App