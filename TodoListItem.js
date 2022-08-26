
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodoAction, editTodoAction, saveTodoAction } from "../redux/actions";


export default function TodoListItem(props) {


  const [retext, setRetext] = useState("");

  const handleInputOnChange = (e) => {
    setRetext(e.target.value);
  };


  const dispatch = useDispatch()

  const delete_Api = (url = 'http://localhost:3000/list-todo') => {
    return fetch(url, {
      method: 'DELETE',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
    })
      .then(response => response.json())
  }

  const put_Api = (url = 'http://localhost:3000/list-todo', data) => {
    return fetch(url, {
      method: 'PUT',
      body: JSON.stringify({ text: data }),
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
    })
      .then(response => response.json())
  }

  const handleDelete = (id) => {
    dispatch(deleteTodoAction(id))
    delete_Api('http://localhost:3000/list-todo'.concat('/', id))
  };

  const handleEdit = (data) => {
    dispatch(editTodoAction(data))
    document.getElementById(`${data.id}`).style.display = 'block'
    console.log(123, data)
  };

  const handleSave = (data) => {
    if (retext !== '') {
      dispatch(saveTodoAction(data))
      data.text = retext
      put_Api('http://localhost:3000/list-todo'.concat('/', data.id), data.text)
    }
    console.log(data)
    setRetext('')
    document.getElementById(`${data.id}`).style.display = 'none'
  }

  return (
    <div className="container-list-item">
      <div>
        <input type="text" placeholder="edit text" id={props.todo.id} onChange={handleInputOnChange} />
      </div>
      <div className="container-list-item-text"><p>{props.todo.text}</p></div>
      <div className='container-list-item-child'>
        <button className='delete' type="button" onClick={() => handleDelete(props.todo.id)}>
          Delete
        </button>
        <button className='edit' type="button" onClick={() => handleEdit(props.todo)}>
          Edit
        </button>
        <button className='save' type="button" onClick={() => handleSave(props.todo)}>
          Save
        </button>
      </div>
    </div>
  )
}