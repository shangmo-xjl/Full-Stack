import { useState } from 'react'

const FamousQuote = () => {
    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
        'The only way to go fast, is to go well.'
    ]

    const [selected, setSelected] = useState(Math.floor(Math.random() * anecdotes.length));
    const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));


    const Button = ({ handleClick, text }) => (
        <button onClick={handleClick}>
            {text}
        </button>
    )
    const generateRandomQuote = () => {
        const randomIndex = Math.floor(Math.random() * anecdotes.length);
        setSelected(randomIndex);
    }
    
    const voteQuote = (index) => {
        const newVotes = [...votes];
        newVotes[index] += 1;
        setVotes(newVotes);
    }

    return (
        <div>
            <h3>Random Famous Quote:</h3>
            <p>{anecdotes[selected]}</p>
            <p>Has {votes[selected]} votes</p>
            <Button handleClick={() => voteQuote(selected)} text="Vote" />
            <Button handleClick={generateRandomQuote} text="Random Quote" />
            <h3>Most Voted Quote:</h3>
            <p>{anecdotes[votes.indexOf(Math.max(...votes))]}</p>
            <p>it has {Math.max(...votes)} votes</p>
        </div>
    )
}

export default FamousQuote;