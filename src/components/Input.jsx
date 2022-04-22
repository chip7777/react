import React from "react";

const InputSource = (props) => {

    return (<input type='text' onInput={props.handleInput} value = { props.message } />);
}
export const Input = React.memo(InputSource);