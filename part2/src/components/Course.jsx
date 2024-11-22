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
    <h1>Web development curriculum</h1>
    <Header course={list[id]}/>
    <Content parts={list[id].parts}/>
    <Total parts={list[id].parts}/>
  </>
)}

export default Course