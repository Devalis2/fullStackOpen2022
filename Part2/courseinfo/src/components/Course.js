const Header = ({ course }) => <h2>{course}</h2>

const Total = ({ parts }) => {
  const initialValue = 0;
  const sumWithInitial = parts.map(part => part.exercises).reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );
  return (
    <b>Total of {sumWithInitial} exercises</b>
  )
}

const Part = ({ part }) =>
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) =>
  <>
    {parts.map(part => <Part key={part.id} part={part} />)}
  </>

const Course = ({ courses }) =>
  <>
    <h1>Web development curriculum</h1>
    {courses.map(course => 
      <div key={course.id}>
        <Header course={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </div>
    )}   
  </>

export default Course