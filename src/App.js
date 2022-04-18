import "./App.css";
import AddTodoForm from "./components/Todos/AddTodoForm";
import TodoList from "./components/Todos/TodoList";
import TotalCompleteItems from "./components/Todos/TotalCompleteItems";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <div className="App container">
        <AddTodoForm />
        <TodoList />
        <TotalCompleteItems />
      </div>
    </div>
  );
}
export default App;
