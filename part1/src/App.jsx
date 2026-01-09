import Test from "./test";
import Feedback from "./feedback"
import FamousQuote from "./famousQuote";
import { useState } from 'react';

const Header = (props) => {
  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.name} {props.exercises}</p>
    </div>
  )
}
const Content = (props) => {
  return (
    <div>
      {props.parts.map((part, index) => (
        <Part key={index} name={part.name} exercises={part.exercises} />
      ))}
    </div>
  )
}

const Total = (props) => {
  const total = props.parts.reduce((sum, part) => sum + part.exercises, 0);
  return (
    <div>
      <p>Number of exercises {total}</p>
    </div>
  )
}

const App = () => {
  // const course = 'Half Stack application development'
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  const [activeTab, setActiveTab] = useState('course'); // course, feedback, quotes

  return (
    <>
      {/* Top Tab Navigation */}
      <div style={{ marginTop: '20px', borderTop: '1px solid #ccc', paddingTop: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
          <button onClick={() => setActiveTab('course')} style={{ marginRight: '10px', backgroundColor: activeTab === 'course' ? '#ddd' : '#fff' }}>Course</button>
          <button onClick={() => setActiveTab('feedback')} style={{ marginRight: '10px', backgroundColor: activeTab === 'feedback' ? '#ddd' : '#fff' }}>Feedback</button>
          <button onClick={() => setActiveTab('quotes')} style={{ backgroundColor: activeTab === 'quotes' ? '#ddd' : '#fff' }}>Quotes</button>
        </div>

        <div>
          {activeTab === 'course' && (
            <div>
              <Content parts={course.parts} />
              <Total parts={course.parts} />
              <Test />
            </div>
          )}
          {activeTab === 'feedback' && <Feedback />}
          {activeTab === 'quotes' && <FamousQuote />}
        </div>
      </div>
    </>
  )
}

export default App