const course = {
  id: 1,
  name: 'Half Stack application development',
  parts: [
    {
      name: 'Fundamentals of React',
      exercises: 10,
      id: 1
    },
    {
      name: 'Using props to pass data',
      exercises: 7,
      id: 2
    },
    {
      name: 'State of a component',
      exercises: 14,
      id: 3
    },
    {
      name: 'Redux',
      exercises: 11,
      id: 4
    },
  ]
}

const Header = (props) =>{
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  )
}

const Content = ({parts}) => {
  return(
    <>
      {parts.map(part => <Part key={part.id} name={part.name} exercises={part.exercises}/>)}
    </>
  )
}

const Total = ({parts}) =>{
  const totalArray = parts.map(part => part.exercises)
  return(
    <p><b>total of {totalArray.reduce((accumulator, currenValue)=> accumulator + currenValue)} exercises</b></p>
  )
}

const Course = () => {
  return(
  <>
    <Header course={course.name} />
    <Content parts={course.parts}/>
    <Total parts={course.parts}/>
  </>
)}


const App = () => {
  return (
    <>
      <Course />
    </>
  )
}

export default App