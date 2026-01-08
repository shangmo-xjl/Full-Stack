import { useState } from 'react'


const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
        {text}
    </button>
)
const StatisticsLine = (props) => {
    if (props.text != "positive")
        return (
            <tr>
                <td>{props.text}</td>
                <td>{props.value}</td>
            </tr>
        )
    else
        return (
            <tr>
                <td>{props.text}</td>
                <td>{props.value} %</td>
            </tr>
        )
}


const Feedback = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    if (good + neutral + bad != 0) {
        return (
            <>
                <h1>give feedback</h1>
                <Button handleClick={() => setGood(good + 1)} text="good" />
                <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
                <Button handleClick={() => setBad(bad + 1)} text="bad" />
                <h1>statistics</h1>
                <table>
                    <tbody>
                        <StatisticsLine text="good" value={good} />
                        <StatisticsLine text="neutral" value={neutral} />
                        <StatisticsLine text="bad" value={bad} />

                        <StatisticsLine text="all" value={good + neutral + bad} />
                        <StatisticsLine text="average" value={((good - bad) / (good + neutral + bad)).toFixed(2)} />
                        <StatisticsLine text="positive" value={(good * 100 / (good + neutral + bad)).toFixed(2)} />
                    </tbody>
                </table>
            </>
        )
    }
    else {
        return (
            <>
                <h1>give feedback</h1>
                <Button handleClick={() => setGood(good + 1)} text="good" />
                <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
                <Button handleClick={() => setBad(bad + 1)} text="bad" />
                <h1>statistics</h1>
                <p>No feedback given</p>
            </>
        )
    }
}

export default Feedback;