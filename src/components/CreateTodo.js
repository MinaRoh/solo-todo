import { useState } from 'react';
import { fetchCreate } from "../util/api";


const CreateTodo = () => {
  // const [text, setText] = useState('');

  const handleOnClick = (e) => {
    e.preventDefault();
    if (e.key === 'Enter') AddTodo(e.target.value);
  }
  const AddTodo = (text) => {

    const newTodo = { text, isDone: false }
    fetchCreate("http://localhost:3001/todos/", newTodo)

  }

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="할 일을 입력하세요"
          onKeyDown={handleOnClick}
        />
      </form>
    </div>
  )
}
export default CreateTodo;