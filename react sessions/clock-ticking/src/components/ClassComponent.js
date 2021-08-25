import React, { Component } from 'react'

class ClassComponent extends Component {

    state = { time: new Date().toLocaleTimeString() }

    componentDidMount(){
        setInterval(
            () => this.setState({time : new Date().toLocaleTimeString()}),
            1000
        )
    }

    render() {
        return (
            <div>
                <h1> Class Component </h1>
                <h1> {this.state.time} </h1>
            </div>
        )
    }
}

export default ClassComponent