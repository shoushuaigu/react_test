import React,{Component} from 'react'
import Child from './test2_child'
class parent extends Component {
    constructor (props){
        super(props)
        this.state={tittle:'组件props and state'}
    }

    render(){
        const tittleStyle ={
            color:'#df001f'
        }
        return(
            <div>
                <div style={tittleStyle}>{this.state.tittle}</div>
                <Child name ='第一个组件' value ={0}></Child>
                {/*子组件的属性 name等就是父组件传递的props*/}
                <Child name ='第二个组件' value ={10}></Child>
                <Child name ='第三个组件' value ={20}></Child>
            </div>
        )
    }
}
export default parent