import {useDispatch, useSelector} from "react-redux";
import {callFilteredTodos, removeTodo, toggle} from '../redux/todos/todosSlice'

const Content = () => {
    const dispatch = useDispatch()
    const filtered = useSelector(callFilteredTodos)
    const handleDestroy = (id) => {
        if (window.confirm("Are you sure?")) {
            dispatch(removeTodo(id))
        }
    }
    const handleToggle = (id) => {
        dispatch(toggle(id))
    }

    return (
        <section className="main">
            <input className="toggle-all" type="checkbox"/>
            <label htmlFor="toggle-all">
                Mark all as complete
            </label>

            <ul className="todo-list">
                {
                    filtered.map(item =>
                        <li className={item.completed ? 'completed' : ''} key={item.id}>
                            <div className="view">
                                <input className="toggle" type="checkbox" defaultChecked={item.completed}
                                       onClick={() => handleToggle(item.id)}/>
                                <label>{item.title}</label>
                                <button className="destroy" onClick={() => handleDestroy(item.id)}></button>
                            </div>
                        </li>)
                }
            </ul>
        </section>
    )
}

export default Content