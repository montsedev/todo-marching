import { TodoItem } from './Components/TodoItem';
import { TodoList } from './Components/TodoList';
import { TodoSearch } from './Components/TodoSearch';
import { TodoCounter } from './Components/TodoCounter'
import { CreateTodoButton } from './Components/CreateTodoButton';

const todos = [
  { text: 'Cortar cebolla', completed: false },
  { text: 'Tomar curso introducci´pon a react', completed: false },
  { text: 'Llorar con la llorona', completed: false },
]

function App() {
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
      {
        todos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} />
        ))
      }
      </TodoList>
      <CreateTodoButton/>
    </>
  );
}

export default App;
