import React from "react"
import About from "./About";
class UserClass extends React.Component{
constructor(props){
    super(props);
    console.log("Parent constructor called")
    this.state={
        count:0,
        count1:1
    }
    // console.log(props)
    
}

 async componentDidMount(){
    const api=await fetch("https://api.github.com/users/Nirmal-Chauhan")
    const data=await api.json()
    console.log(data);
    console.log("Parent CDM")

}

componentDidUpdate(){
    console.log("CDU is called")
}
componentWillUnmount(){
    console.log("CWU is called")
}

render(){
    console.log("PArent render called")
    const{name,address}=this.props
    const{count}=this.state
    return(
<div>
<h1>User Class</h1>
<h2>Count:{count}</h2>

<button onClick={()=>{
    this.setState({
        count:this.state.count+1,
        count1:this.state.count1+1,
    })
}}> Count Increase</button>
<h2>Count1:{this.state.count1}</h2>
<h2> Name:{name}</h2>
<h2>Address:{address}</h2>
<About/>
</div>
 )
}

}


export default UserClass