import React, { useState, useMemo } from 'react'

const MemoHook = () => {

    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);
    
    const incrementOne = () => {
        setCounterOne(counterOne + 1)
    }

    const incrementTwo = () => {
        setCounterTwo(counterTwo + 1)
    }

    const isEven = useMemo(() => {
            let i = 0
            while (i < 1000000000) 
                i++
            return counterOne % 2 === 0
        }, [counterOne]
    )
    
    
    return (
        <div>
            <h1> Use Memo Hook Example </h1>
            <div>
                <button onClick={incrementOne}> Click - {counterOne} </button>
                <span> {isEven ? 'Even' : 'Odd'} </span>
            </div>
            <div>
                <button onClick={incrementTwo}> Click - {counterTwo} </button>
            </div>
        </div>
    )
}

export default MemoHook