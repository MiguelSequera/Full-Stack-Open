import { useState } from 'react'

const Statistics = (props) => {
  return (
    <div>
      <h1>statistics</h1>
      <p style={{margin:0}}>good {props.good}</p>
      <p style={{margin:0}}>neutral {props.neutral}</p>
      <p style={{margin:0}}>bad {props.bad}</p>
      <p style={{margin:0}}>all {props.all}</p>
      <p style={{margin:0}}>average {(props.all === 0 ? 0 : props.average / props.all)}</p>
      <p style={{margin:0}}>positive {(props.all === 0 ? 0 :(props.good*100)/props.all)}%</p>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)


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

  return (
    <>
      <h1>give feedback</h1>
      <button onClick={handleClickGood}>good</button>
      <button onClick={handleClickNeutral}>neutral</button>
      <button onClick={handleClickBad}>bad</button>
      <Statistics 
        good = {good}
        neutral = {neutral}
        bad = {bad}
        all = {all}
        average = {average}
      />
    </>
  )
}

export default App