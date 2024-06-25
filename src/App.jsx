import "./components/todo/todo.scss"
import TodoData from "./components/todo/TodoData"
import TodoNew from "./components/todo/TodoNew"
import reactLogo from "./assets/react.svg"
const App = () => {
  const hoidanit = "Eric";
  const age = 25;
  const data = {
    address: "hanoi",
    country: "vietnam"
  }
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew />
      <TodoData name={hoidanit} age={age} data={data} />
      <div className="todo-image">
        <img src={reactLogo} alt="" />
      </div>
    </div>
  )
}

export default App
