const Course = ({ course }) => { 
  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <br />
      <Total parts={course.parts} />
    </>
  )
}

const Header = ({ course }) => <h2>{course}</h2>
const Part = ({ part }) => {
  return (
    <p>
      {part.name}: {part.exercises}
    </p>
  )
}
const Content = ({parts}) => {
  return (
    <>
      {parts.map(part => 
        <Part key={part.id} part={part} />
      )}
    </>
  )
}
const Total = ({ parts }) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0);
  return (
    <p>
      Total of {total} exercises
    </p>
  )
}

export default Course;