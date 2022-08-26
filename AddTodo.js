import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoAction } from "../redux/actions";
import { v4 as uuidv1 } from "uuid";



export default function AddTodo() {
  const [text, setText] = useState("");
  const dispatch = useDispatch()

  const handleInputChange = (e) => {
    setText(e.target.value);
  }

  let arrData = []

  const post_Api = (url = 'http://localhost:3000/list-todo', data = arrData.payload) => {
    return fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
    })
      .then(response => response.json())
  }

  const handleSubmit = () => {
    if (text !== '') {
      arrData = dispatch(addTodoAction({
        id: uuidv1(),
        text: text
      }))

      post_Api()
    }

    console.log(arrData.payload)
    setText("");
  };

  return (
    <div className="container-newtodo">
      <div className="container-newtodo-greeting">
        <p>Hi! welcome to todo-app</p>
      </div>
      <div className="container-inp-btn">
        <input type="text" placeholder="Enter a new task" onChange={handleInputChange} value={text} />
        <button type="button" onClick={handleSubmit}>Add</button>
      </div>
    </div>
  );
}