import React,{Component} from "react";

export class Message extends Component {
    state  = {
        
    }

    render() {
        return <p className="text">{this.props.text}</p>
    }
}
