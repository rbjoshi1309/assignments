import React, {useState} from 'react'

const FunctionComponent = () => {

    let time = new Date().toLocaleTimeString();
    const [currentTime , setCurrentTime] = useState(time);

    const UpdateTime = () => {
        time = new Date().toLocaleTimeString();
        setCurrentTime(time);
    }

    setInterval(UpdateTime, 1000);

    return (
        <div>
            <h1> Function Component </h1>
            <h1> {currentTime} </h1>
        </div>
    )
}

export default FunctionComponent