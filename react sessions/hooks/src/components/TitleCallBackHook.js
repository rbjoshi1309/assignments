import React from 'react'

function TitleCallBackHook(){
    console.log('Rendering Title')
    return (
        <h2>
            Using Call Back Hook
        </h2>
    )
}

export default React.memo(TitleCallBackHook)