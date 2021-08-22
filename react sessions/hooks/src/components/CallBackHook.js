import React, { useState, useCallback } from 'react'
import ButtonCallBackHook from './ButtonCallBackHook'
import CountCallBackHook from './CountCallBackHook'
import TitleCallBackHook from './TitleCallBackHook'

function CallBackHook(){
    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)

    const incrementOne = useCallback(() => {
        setCounterOne(counterOne + 1)
    }, [counterOne])
    
    const incrementTwo = useCallback(() => {
        setCounterTwo(counterTwo + 1)
    }, [counterTwo])

    return (
        <div>
            <TitleCallBackHook/>
            <CountCallBackHook text='Counter 1' count={counterOne}/>
            <ButtonCallBackHook handleClick={incrementOne}>Increment Counter 1</ButtonCallBackHook>
            <CountCallBackHook text='Counter 2' count={counterTwo}/>
            <ButtonCallBackHook handleClick={incrementTwo}>Increment Counter 2</ButtonCallBackHook>
        </div>
    )
}

export default CallBackHook