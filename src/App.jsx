import Todos from "./components/Todos.jsx";
import Lists from "./components/Lists.jsx";
import { useState } from "react";

function App() {
 
  // kita kena simpan semua value input dalam useState
  const [todos, setTodos] = useState([]);

  const handleValues = ({inputValue}) => {
    console.log({inputValue});

    // ini untuk new value, contoh kita input banyak value
    // jadi ini utk simpan semua value tu
    const newTodo = {
      id: Math.floor(Math.random() * 1001).toString(16),
      inputValue,
      checked: false
    };

    setTodos((previous) => {
      return [newTodo, ...previous]
    })

  };

  const handleToggle = (event) => {

    const isBools = event.target.checked;
    const isId = event.target.id;

    setTodos((previous) => {
      const changeTodo = previous.map((todo) => {
        if(todo.id != isId){
          return todo
        }

        const updateTodo = {
          ...todo,
          checked: isBools
        }

        return updateTodo
      })

      return changeTodo;
  })
  }


  return (
    <>
      <div>
        <pre>{JSON.stringify(todos, null, 2)}</pre>
       <Todos 
        details={handleValues}
       />
      </div>

      {/* kita akan setkan semua value tadi kepada todos guna map */}
      {
        todos.map((todos) => {
          return <Lists 
            key={todos.id}
            id={todos.id}
            name={todos.inputValue}
            toggle={handleToggle}
            bools={todos.checked}

          />
        })
      }
    </>
  )
}

export default App
