import { Express } from 'express';
import { Todo } from '@myorg/data';

const todos: Todo[] = [{ title: 'todo1' }, { title: 'todo2' }];

export function addTodoRoutes(app: Express) {
  app.get('/api/todos', (req, resp) => resp.send(todos));
  app.post('/api/addTodo', (req, resp) => {
    const newTodo = {
      title: 'new todo',
    };
    todos.push(newTodo);
    resp.send(newTodo);
  });
}
