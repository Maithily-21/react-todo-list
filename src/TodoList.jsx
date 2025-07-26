import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function TodoList() {
  let [todos, setTodos] = useState([
    { task: "Sample Task", id: uuidv4(), isDone: false },
  ]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTodo = () => {
    if (newTodo.trim() === "") return;
    setTodos((prevTodo) => [
      ...prevTodo,
      { task: newTodo, id: uuidv4(), isDone: false },
    ]);
    setNewTodo("");
  };

  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  let deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  let markAllDone = () => {
    setTodos((prevTodo) =>
      prevTodo.map((todo) => {
        return {
          ...todo,
          isDone: true,
        };
      })
    );
  };

  let markAsDone = (id) => {
    setTodos((prevTodo) =>
      prevTodo.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isDone: true,
          };
        } else {
          return todo;
        }
      })
    );
  };

  return (
    <div className="todo-container">
      <h2 className="title">Task Manager</h2>
      <div className="input-section">
        <input
          className="todo-input"
          placeholder="Enter Task"
          value={newTodo}
          onChange={updateTodoValue}
        />
        <button className="btn add-btn" onClick={addNewTodo}>
          Add Task
        </button>
      </div>

<hr>
</hr>
      <h4 className="list-title">To-do List 📝</h4>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li className="todo-item" key={todo.id}>
            <span className={todo.isDone ? "done-task" : ""}>{todo.task}</span>
            <div className="btn-group">
              <button
                className="btn delete-btn"
               
                onClick={() => deleteTodo(todo.id)}
              >
                <DeleteOutlineOutlinedIcon />
              </button>
              <button
                className="btn done-btn"
                onClick={() => markAsDone(todo.id)}
              >
               <CheckCircleIcon />
              </button>
            </div>
          </li>
        ))}
      </ul>
      <button className="btn mark-all-btn" onClick={markAllDone}>
        Mark All as Done ✅
      </button>
    </div>
  );
}
