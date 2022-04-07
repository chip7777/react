import React,{Component} from "react";

export class Message extends Component {
    state  = {
        text : "test text"
    }

    render() {
        return <p>{this.props.text}</p>
    }
}
