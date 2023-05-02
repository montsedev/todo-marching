//** components **//
import TodoItem  from '../Components/TodoItem';
import TodoList from '../Components/TodoList';
import TodoSearch from '../Components/TodoSearch';
import TodoCounter from '../Components/TodoCounter';
import TodoButtom from '../Components/TodoButton';

function AppUI({
    completeTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
}) {
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
            <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
            />
            ))
        }
        </TodoList>
        <TodoButtom />
        </>
    )
}

export default AppUI