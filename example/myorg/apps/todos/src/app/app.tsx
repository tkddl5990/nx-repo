import { useState, useEffect } from 'react';
import { Todo } from '@myorg/data';
import { Todos } from '@myorg/ui';

function App() {
  const [todos, setTodos] = useState<Todo[]>([
    { title: 'tood1' },
    { title: 'todo2' },
  ]);

  useEffect(() => {
    fetch('/api/todos')
      .then((_) => _.json())
      .then(setTodos);
  }, []);

  const addTodo = () => {
    fetch('/api/addTodo', {
      method: 'POST',
      body: '',
    })
      .then((_) => _.json())
      .then((newTodo) => {
        setTodos([...todos, newTodo]);
      });
  };

  return (
    <>
      <h1>Todos</h1>
      <Todos todos={todos} />
      <button type="button" onClick={addTodo} id="add-todo">
        Add Todo
      </button>
    </>
  );
}

export default App;
