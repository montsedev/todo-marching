//** dependence **//
import { useState } from 'react';

//** components **//
import TodoItem  from './Components/TodoItem';
import TodoList from './Components/TodoList';
import TodoSearch from './Components/TodoSearch';
import TodoCounter from './Components/TodoCounter';
import TodoButtom from './Components/TodoButton';

const todos = [
  { text: 'Cortar cebolla', completed: false },
  { text: 'Tomar curso introducci´pon a react', completed: false },
  { text: 'Llorar con la llorona', completed: false },
]

function App() {
  const [ searchValue, setSearchValue ] = useState('');

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
      <TodoButtom />
    </>
  );
}

export default App;
