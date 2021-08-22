import React from 'react'
import ToBeWrapped from './ToBeWrapped'

const WithHOC = (Component) => {
    return () => (
        <div>
            <Component/>
            Inside HOC
        </div>
    )
}

export default WithHOC