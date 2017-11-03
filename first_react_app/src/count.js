import React, { Component } from 'react'
class Count extends Component {
    constructor(props) {
        super(props)
        this.onClickadd = this.onClickadd.bind(this)
        this.onClickjj = this.onClickjj.bind(this)
        this.state = { count: 0 }
    }
    onClickadd() {
        this.setState({ count: this.state.count + 1 })
    }
    onClickjj() {
        this.setState({ count: this.state.count - 1 })
    }
    render() {
        const buttonStyle = {
            width: '50px',
            height: '50px',
            border: 'none',
            outLine: 'none',
            background: '#df001f',
            color: '#fff',
            // float: 'left',
            marginBottom:'50px'
        }
        const clear = {
            overflow: 'hidden'
        }
        const center ={
            textAlign:'center'
        }
        return (
            <div style={center}>
                <div style={clear}>
                    <button style={buttonStyle} onClick={this.onClickadd}>+++</button>
                    <button style={buttonStyle} onClick={this.onClickjj}>---</button>
                </div>

                <div>
                    count:{this.state.count}
                </div>
            </div>
        )
    }
}
export default Count 