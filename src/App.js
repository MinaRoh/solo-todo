import useFetch from './util/useFetch';
import './App.css';
import TodoList from './components/TodoList';
import CreateTodo from './components/CreateTodo';

function App() {
  const [todos] = useFetch("http://localhost:3001/todos/");
  return (
    <div className="App">
      <h1>TODO</h1>
      <CreateTodo />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
