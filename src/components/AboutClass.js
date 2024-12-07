import React from "react";

class AboutClass extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count:0
        }
    }

    render(){
        return(
            <div>
                {this.props.name} {this.state.count}
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count + 1,
                    })
                }}>click {this.state.count}</button>
            </div>
        )
    }
}
export default AboutClass;