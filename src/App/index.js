//** dependence **//
import { useState } from 'react';

//** components **//
import AppUI from './AppUI';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: false },
  { text: 'Tomar curso introducción a react', completed: false },
  { text: 'Llorar con la llorona', completed: true },
]
function App() {
  const [todos, setTodos] = useState(defaultTodos)
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

    const completeTodo = (text) => {
        const todoIndex = searchedTodos.findIndex(todo => todo.text === text)
        const newTodos = [...todos]
        newTodos[todoIndex].completed = true
        setTodos(newTodos)
        //todos[todoIndex] = {
        //  text: todos[todoIndex].text,
        //  completed: true
        //}
    }

    const deleteTodo = (text) => {
        const todoIndex = searchedTodos.findIndex(todo => todo.text === text)
        const newTodos = [...todos]
        newTodos.splice(todoIndex, 1)
        setTodos(newTodos)
        //todos[todoIndex] = {
        //  text: todos[todoIndex].text,
        //  completed: true
        //}
    }

  return (
    <AppUI
      completeTodos={completeTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
