import { useState } from 'react'

// Button
const Button = ({ handleClick, text}) => <button onClick={handleClick}>{text}</button>

// Anecdote of the day
const Anecdote = ({anecdote, voteNumber}) => {
  return (
    <>
      <h1>Anecdote of the day</h1>
      {anecdote} <br />
      has {voteNumber} votes <br />
    </>
  )
}

// Anecdote with the most votes
const PopularAnecdote = ({anecdote, voteNumber}) => {
  if (voteNumber === 0) {
    return (
      <>
        <h1>Anecdote with most votes</h1>
        No votes given.
      </>
    )
  }
  return (
    <>
      <h1>Anecdote with most votes</h1>
      {anecdote} <br />
      has {voteNumber} votes <br />
    </>
  )
}

const App = () => {
  // Anecdotes
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  // State
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
  const mostPopular = votes.indexOf(Math.max(...votes));

  // Random number
  const nextAnecdote = () => {
    let random =  Math.floor(Math.random() * anecdotes.length);
    if (random == selected && random >= 0) random++;
    if (random == selected && random == anecdotes.length) random--;
    return setSelected(random);
  }

  // Votes
  const vote = () => {
    let copy = [...votes];
    copy[selected] += 1;
    setVotes(copy);
  }

  return (
    <>
      <Anecdote anecdote={anecdotes[selected]} voteNumber={votes[selected]} />
      <Button handleClick={vote} text="vote" />
      <Button handleClick={nextAnecdote} text="next anecdote" />
      <br />
      <PopularAnecdote anecdote={anecdotes[mostPopular]} voteNumber={votes[mostPopular]} />
    </>
  )
}

export default App