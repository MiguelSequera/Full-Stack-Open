import { useState } from 'react'

const Statistics = (props) => {
  return (
    <div>
      <h1>statistics</h1>
      <p style={{display: props.active === 1 ? 'none' : 'block'}}>No feedback given</p>
      <section style={{display: props.active === 0 ? 'none' : 'block'}}>
      <table>
        <tbody>
        <StatisticsLine 
          style={{margin: 0 }}
          text="good" 
          value={props.good}
        /> 
        <StatisticsLine 
          style={{margin: 0 }}
          text="neutral" 
          value={props.neutral}
        /> 
        <StatisticsLine 
          style={{margin: 0 }}
          text="bad" 
          value={props.bad}
        /> 
        <StatisticsLine 
          style={{margin: 0 }}
          text="all" 
          value={props.all}
        /> 
        <StatisticsLine 
          style={{margin: 0 }}
          text="average" 
          value={(props.all === 0 ? 0 : props.average / props.all).toFixed(1)}
        /> 
        <StatisticsLine 
          style={{margin: 0 }}
          text="positive" 
          value={`${(props.all === 0 ? 0 :(props.good*100)/props.all).toFixed(1)}%`}
        />
        </tbody>
      </table>
      </section>
    </div>
  )
}

const Button = (props) => {
  return(
    <button onClick={props.handleClick}>{props.text}</button>
  )
}


const StatisticsLine = (props) => {
  return(
        <tr>
          <td>{props.text}</td>
          <td>{props.value}</td>
        </tr>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [active, setActive] = useState(0)


  const handleClickGood = () => {
    setAverage(currentValue => currentValue + 1)
    setGood(currentValue => currentValue + 1)
    setAll(currentValue => currentValue + 1)
    setActive(1)
  }
  const handleClickNeutral = () => {
    setNeutral(currentValue => currentValue + 1)
    setAll(currentValue => currentValue + 1)
    setActive(1)
  }
  const handleClickBad = () => {
    setAverage(currentValue => currentValue - 1)
    setBad(currentValue => currentValue + 1)
    setAll(currentValue => currentValue + 1)
    setActive(1)
  }

  return (
    <>
      <h1>give feedback</h1>
      <Button 
        handleClick={handleClickGood} 
        text="good"/>
      <Button 
        handleClick={handleClickNeutral} 
        text="neutral"/>
      <Button 
        handleClick={handleClickBad} 
        text="bad"/>
      <Statistics 
        good = {good}
        neutral = {neutral}
        bad = {bad}
        all = {all}
        average = {average}
        active = {active}
      />
    </>
  )
}

export default App


/*





*/ 