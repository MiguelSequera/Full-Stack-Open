const courses = [
  {
    name: 'Half Stack application development',
    id: 1,
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
      }
    ]
  }, 
  {
    name: 'Node.js',
    id: 2,
    parts: [
      {
        name: 'Routing',
        exercises: 3,
        id: 1
      },
      {
        name: 'Middlewares',
        exercises: 7,
        id: 2
      }
    ]
  }
]

const Header = ({course}) =>{
  return (
    <h1>{course.name}</h1>
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

const Course = ({list, id}) => {
  return(
  <>
    <Header course={list[id]}/>
    <Content parts={list[id].parts}/>
    <Total parts={list[id].parts}/>
  </>
)}


const App = () => {
  return (
    <>
      {courses.map((course, i) => <Course key={course.id} id={i} list={courses}/>)}
    </>
  )
}

export default App