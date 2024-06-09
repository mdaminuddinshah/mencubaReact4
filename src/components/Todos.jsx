import PropTypes from 'prop-types';
import { useState } from "react";

function Todos(props) {

  // utk handle submit form
  const handleSubmit = (event) => {
    event.preventDefault();

    const formElements = event.target.elements;
    const inputValue = formElements.todo.value;

    props.details({
      inputValue
    })

    event.target.reset();
  }

  // utk handle perubahan input
  // utk kau nak ubah data yg sedia-ada, dgn perubahan di input
  // const handleInput = (event) => {
  //   setTodos(event.target.value);
  // }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="todo">Text :</label>
          <input type="text" id="todo" name="todos"/>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    
    </div>
  )
}

Todos.propTypes = {
    details: PropTypes.func,
}

export default Todos;
