import React ,{Component} from 'react'
import '../testless/test1.css'
class handleclick extends Component {
    constructor(props){
        super(props)
        this.state ={count:0}
        this.add = this.add.bind(this)
        this.sub = this.sub.bind(this)
        this.zero = this.zero.bind(this)
    }
    add(){
        this.setState({count:this.state.count+1})
    }
    sub(){
        this.setState({count:this.state.count-1})
    }
    zero(){
        this.setState({count:0})
    }
    render(){
        return (
            <div className='box'>
                <button onClick={this.add}>++</button>
                <button onClick ={this.sub}>--</button>
                <button onClick ={this.zero}>0000000</button>
                count:{this.state.count}
            </div>
        )
    }
}
export default handleclick