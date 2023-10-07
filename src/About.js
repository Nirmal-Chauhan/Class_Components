import React from "react"
class About extends React.Component{

    constructor(){
        super();
        console.log(" Child Construtor ")
    }
    componentDidMount(){
        console.log("Child CDM")
    }

    render(){
        console.log("Child Render")
        return(
            <div>
                <h1>Child Component</h1>
            </div>
        )
    }
}
export default About