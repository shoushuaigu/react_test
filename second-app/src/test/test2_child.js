import React,{Component} from 'react'
import PropTypes from 'prop-types'
class child extends Component{
    constructor(props){
        super(props)
        this.state ={count:props.value || 0}
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
        this.setState({count:this.props.value || 0})
    }
    render(){
        const {name} =this.props    //解构获得name对象
        return(
            <div>
                <button onClick ={this.add}>++</button>
                <button onClick ={this.sub}>--</button>
                <button onClick ={this.zero}>归零</button>
                {name}:count:{this.state.count}
            </div>
        )
    }
}
child.propTypes={
    name:PropTypes.string.isRequired,
    value:PropTypes.number
}
child.defaultProps={
    value:0
}
export default child