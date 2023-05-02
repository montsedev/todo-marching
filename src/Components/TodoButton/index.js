//** styles **//
import './TodoButton.css'
function TodoButtom() {
    const onComplete = () => {
        alert('Borraste');
    }

    return(
        <button
        className="CreateTodoButton"
        onClick={ () => onComplete }
        >+</button>
    );
}

export default TodoButtom