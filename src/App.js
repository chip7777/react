import { getValue } from "@testing-library/user-event/dist/utils";
import React, { useState, useEffect } from "react";
import "./App.css";

export const App = () => {
  const [messageList, SetMessageList] = useState([]);
  const [message, SetMessage] = useState("");
  const Author = { Men: "men", Bot: "bot" };
  const handleInput = (ev) => SetMessage(ev.target.value);

  const handleClick = (ev) => {
    SetMessageList([...messageList, { Mess: message, Author: Author.Men }]);
    SetMessage("");
  };

  const sendMess = () => {
    SetMessageList([...messageList, { Mess: "Hello", Author: Author.Bot }]);
  };


  useEffect(() => {
    if (messageList.length)
      if (messageList[messageList.length - 1].Author === Author.Men) 
        setTimeout(() => sendMess(), 1500); 
  }, [messageList]);

  return (
    <>
      <ul>
        {messageList.map((el) => (
          <li>{el.Author + " : " + el.Mess}</li>
        ))}
      </ul>
      <input type="text" onInput={handleInput} value={message}></input>
      <button onClick={handleClick}>send</button>
    </>
  );
};
