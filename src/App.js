import useFetch from './util/useFetch';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  const [todos] = useFetch("http://localhost:3001/todos/");
  return (
    <div className="App">
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
