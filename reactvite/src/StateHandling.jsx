import react, { useState } from 'react'
function Statehandling() {
    const [count, setCount] = useState(100)
    const[set,red] = useState(0);
    const[set1,green] = useState(0);
    const[set2,blue] = useState(0);
    function increment() {
        setCount(count + 20)
    }
    function decrement() {
        setCount(count - 20)
    }
    return (
        <div>
            <h2>change background color</h2>
            <div style={{backgroundColor:rgb(`${set},${set1},${set2}`), height:'200px', width:'400px', border:'2px solid white'}}>
            </div>
            <button onClick={()=>red(set+10)}>Red</button>
        </div>
    )
}

export default Statehandling