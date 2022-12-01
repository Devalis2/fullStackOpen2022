import { useState } from 'react'

// Button
const Button = ({ handleClick, text}) => <button onClick={handleClick}>{text}</button>
// StatisticLine
const StatisticLine = ({text, value}) => <tr><td>{text}</td><td>{value}</td></tr>

// Statistics
const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad;
  if (total === 0) {
    return <>No feedback given</>
  }
  return(
    <table>
      <tbody>
        <StatisticLine text='good' value={good} />
        <StatisticLine text='neutral' value={neutral} />
        <StatisticLine text='bad' value={bad} />
        <StatisticLine text='all' value={total} />
        <StatisticLine text='average' value={parseFloat(((good - bad) / total).toFixed(1))} />
        <StatisticLine text='positive' value={parseFloat(((good / total) * 100).toFixed(1)) + '%'} />
      </tbody>
    </table>
  )
}
// App
const App = () => {
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
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  )
}

export default App