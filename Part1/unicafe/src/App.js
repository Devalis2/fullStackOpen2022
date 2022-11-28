import { useState } from 'react'

// Button
const Button = (props) => 
  <button onClick={props.handleClick}>
    {props.text}
  </button>



// Display
const Display = props => <>{props.text} {props.value}</>




const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
      <h1>give feedback</h1>
      <Button text='good' handleClick={() => setGood(good + 1)} />
      <Button text='neutral' handleClick={() => setNeutral(neutral + 1)} />
      <Button text='bad' handleClick={() => setBad(bad + 1)} />
      <h1>statistics</h1>
      <Display text='good' value={good} /><br/>
      <Display text='neutral' value={neutral} /><br/>
      <Display text='bad' value={bad} /><br/>
    </>
  )
}

export default App