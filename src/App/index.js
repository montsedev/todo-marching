// **** dependence **** //
import { useState } from 'react';

// **** components **** //
import AppUI from './AppUI';

// const defaultTodos = [
//  { text: 'Cortar cebolla', completed: false },
//  { text: 'Tomar curso introducción a react', completed: false },
//  { text: 'Llorar con la llorona', completed: true },
// ]
let parsedTodos = []

function App() {
    // Traemos nuestros TODOs almacenados
  const localStorageTodos = localStorage.getItem('TODOS_V1')

  if (!localStorageTodos) {
    // Si el usuario es nuevo no existe un item en localStorage, por lo tanto guardamos uno con un array vacío
    localStorage.setItem('TODOS_V1', JSON.stringify([]))
    parsedTodos = []
  } else {
    // Si existen TODOs en el localStorage los regresamos como nuestros todos
    try {
      parsedTodos = JSON.parse(localStorageTodos)
    } catch (error) {
      console.error(error.message)
    }
  }

  const [todos, setTodos] = useState(parsedTodos);
  const [searchValue, setSearchValue] = useState('')

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length

  let searchedTodos = []

  if (!searchValue.length >= 1) {
    searchedTodos = todos
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    })
  }
  // persistencia en eliminar y completar TODOs, recordar que state no necesita modificar como el local storage
  const saveTodos = ( newTodos ) => {
    const stringifiedTodos = JSON.stringify(newTodos)
    localStorage.setItem('TODOS_V1', stringifiedTodos)
    setTodos(newTodos)
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }

  return (
    <AppUI
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
