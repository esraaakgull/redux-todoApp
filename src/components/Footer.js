import {useDispatch, useSelector} from "react-redux";
import filterOptions from "../constants/filterOptions";
import {callCategory, callTodos, changeFilterCategory, clearCompleted} from '../redux/todos/todosSlice'

const Footer = () => {
    const dispatch = useDispatch()
    const items = useSelector(callTodos)
    const category = useSelector(callCategory)
    const itemsLeft = items.filter(item => !item.completed).length

    return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{`${itemsLeft} items left`}</strong>
            </span>
            <ul className="filters">
                <li>
                    <button className={category === filterOptions.ALL ? 'selected' : ''}
                            onClick={() => dispatch(changeFilterCategory(filterOptions.ALL))}>All
                    </button>
                </li>
                <li>
                    <button className={category === filterOptions.ACTIVE ? 'selected' : ''}
                            onClick={() => dispatch(changeFilterCategory(filterOptions.ACTIVE))}>Active
                    </button>
                </li>
                <li>
                    <button className={category === filterOptions.COMPLETED ? 'selected' : ''}
                            onClick={() => dispatch(changeFilterCategory(filterOptions.COMPLETED))}>Completed
                    </button>
                </li>
            </ul>
            <button className="clear-completed" onClick={() => dispatch(clearCompleted())}>
                Clear completed
            </button>
        </footer>


    )
}

export default Footer