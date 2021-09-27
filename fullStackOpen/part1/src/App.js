import React from 'react'
import Header from './Header'
import Content from './Content'
import Total from './Total'

const App = () => {
  const course = {
    courseName : 'Half Stack application development',
    courseParts: [ 
      { partName: 'Fundamentals of React', partExercises: 10 },
      { partName: 'Using props to pass data', partExercises: 7 },
      { partName: 'State of a component', partExercises: 14 }
    ]
}

  return (
    <div>
      <Header course={course.courseName} />
      <Content parts={course.courseParts}/>
      <Total parts={course.courseParts}/>
    </div>
  )

}

export default App
