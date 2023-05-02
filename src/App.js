//** dependence **//
import { useState } from 'react';

//** components **//
import TodoItem  from './Components/TodoItem';
import TodoList from './Components/TodoList';
import TodoSearch from './Components/TodoSearch';
import TodoCounter from './Components/TodoCounter';
import TodoButtom from './Components/TodoButton';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: false },
  { text: 'Tomar curso introducción a react', completed: false },
  { text: 'Llorar con la llorona', completed: true },
]

function App() {
  const [todos] = useState(defaultTodos)
  const [ searchValue, setSearchValue ] = useState('');

  //! es si es falso !! es si es verdadero
  const completeTodos = todos.filter(todo => !!todo.completed).length
  const totalTodos = todos.length

  let searchedTodos = []
  if(!searchValue.length >= 1 ){
    searchedTodos = todos
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase()
      const searchText = searchValue.toLowerCase()

      return todoText.includes(searchText)
    })
  }

  return (
    <>
      <TodoCounter
      complete={completeTodos}
      total={totalTodos}
      />
      <TodoSearch
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      />
      <TodoList>
      {
        searchedTodos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} />
        ))
      }
      </TodoList>
      <TodoButtom />
    </>
  );
}

export default App;
