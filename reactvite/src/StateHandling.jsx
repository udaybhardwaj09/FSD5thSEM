import React, { useState } from 'react'

function Statehandling() {
    const [red, setRed] = useState(0)
    const [green, setGreen] = useState(0)
    const [blue, setBlue] = useState(0)

    return (
        <div>
            <h2>Change background color</h2>

            <div
                style={{
                    backgroundColor: `rgb(${red}, ${green}, ${blue})`,
                    height: '200px',
                    width: '400px',
                    border: '2px solid white'
                }}
            >
            </div>

            <button onClick={() => setRed(red + 10)}>Red</button>
        </div>
    )
}

export default Statehandling