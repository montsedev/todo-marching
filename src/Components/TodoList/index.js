//** styles **//
import './TodoList.css'

function TodoList(props) {
    return (
        <section>
            <ul>
                { props.children }
            </ul>
        </section>
    )
}

export default TodoList
