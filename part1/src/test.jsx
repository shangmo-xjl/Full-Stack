import { useOptimistic, useState } from 'react';



// const Hello = ({ name, age }) => {
//     return (
//         <div>
//             <p>
//                 Hello {name}, you are {age} years old
//             </p>
//             <p>So you were probably born in {new Date().getFullYear() - age}</p>
//         </div>
//     );
// };

// const Display = ({ counter }) => {
//     return (
//         <div>
//             <p>Counter: {counter}</p>
//         </div>
//     );
// }

// const ButtonComponent = ({onClick, text}) =>{
//     return (
//         <div> 
//             <button onClick={onClick}>{text}</button>
//         </div>
//     );
// }



// const App = () => {
//     const [counts, setCounts] = useState(0);

//     const handleIncrement = () => setCounts(counts + 1);
//     const resetAction = () => setCounts(0);
//     const handleDecrease = () => setCounts(counts - 1);

//     return (
//         <div>
//             <h1>Greetings</h1>
//             <Hello name="Peter" age={10} />
//             <Hello name="Maya" age={26} />
//             <Display counter={counts} />
//             <ButtonComponent onClick={handleIncrement} text= "Increment" />
//             <ButtonComponent onClick={resetAction} text= "Reset" />
//             <ButtonComponent onClick={handleDecrease} text= "Decrement" />
//         </div>
//     );
// };

// export default App;


// import { useState } from 'react';
// const App = () => {
//     const [click, setClick] = useState({
//         left: 0,
//         right: 0
//     });

//     const handleLeftClick = () => {
//         setClick({
//             ...click,
//             left: click.left + 1
//         });
//     }
//     const handleRightClick = () => {
//         setClick({
//             ...click,
//             right: click.right + 1
//         });
//     }

//   return (
//     <div>
//       {click.left}
//       <button onClick={handleLeftClick}>
//         left
//       </button>
//       <button onClick={handleRightClick}>
//         right
//       </button>
//       {click.right}
//     </div>
//   )
// }
// export default App;


const History = ({ allClicks }) => {
    if (allClicks.length === 0) {
        return (
            <div>
                <p>the app is used by pressing the buttons</p>
            </div>
        )
    }

    return (
        <div>
            <p>button press history: {allClicks.join('+')}</p>
        </div>
    )
}

const Button = (props) => (
    <button onClick={props.onClick}>
        {props.text}
    </button>
)


const Test = () => {
    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)
    const [total, setTotal] = useState(0)

    const [allClicks, setAll] = useState([])


    const handleLeftClick = () => {
        setAll([...allClicks, 'L'])
        const updateData = left + 1
        setLeft(updateData)
        setTotal(updateData + right)
    }


    const handleRightClick = () => {
        setAll([...allClicks, 'R'])
        const updateData = right + 1
        setRight(updateData)
        setTotal(left + updateData)
    }

    const hello = (who) => () => console.log('hello', who)
    

    return (
        <>
            {left}
            <Button onClick={handleLeftClick} text="left" />
            <Button onClick={handleRightClick} text="right" />
            {right}
            <p>Total: {total}</p>
            <History allClicks={allClicks} />
            <Button onClick={hello('肖健林')} text="hello" />
        </>
    )
}


export default Test;