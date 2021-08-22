import React from 'react'

function CountCallBackHook({ text, count}){
    console.log('Rendering : ', text)
    return (
        <div>
            {text} - {count}
        </div>
    )
}

export default React.memo(CountCallBackHook)