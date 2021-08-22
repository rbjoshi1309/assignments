import React from 'react'
import WithHOC from './WithHOC'

const ToBeWrapped = () => {
    return (
        <div>
            Inside To Be Wrapped
        </div>
    )
}

export default WithHOC(ToBeWrapped)