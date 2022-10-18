import { fetchDelete } from '../util/api';

const TodoList = ({ todos }) => {

  const handleDeleteClick = (id) => {
    fetchDelete('http://localhost:3001/todos/', id);
  }

  return (
    <div className="todo-list">

      {!todos ? <p>todos가 null입니다</p> :
        todos.map(todo => (
          <div className="todolist" key={todo.id} >
            {todo.isDone ? <span>☑︎</span> : <span>◻︎</span>}
            <span> {todo.id} </span>
            <span>{todo.text} </span>
            <button onClick={() => handleDeleteClick(todo.id)}> ☒</button>
          </div>
        ))}

    </div>
  );
}
export default TodoList;