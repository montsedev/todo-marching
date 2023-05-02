//** styles **//
import './TodoCounter.css'
function TodoCounter({ total, complete }) {
    return (
        <h2 className="TodoCounter">
            Has completado {complete} de {total} TODOs
        </h2>
    )
}

export default TodoCounter;
