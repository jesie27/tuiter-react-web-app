import TodoItem from "./todo-item";
import todos from "./todos.json";
const TodoList = () => {
    return(
        <>
            <h3>TodoList</h3>
            <ul>
                {
                    todos.map(todo => {
                        return(<TodoItem todo={todo}/>);
                    })
                }
            </ul>
        </>
    );
}
export default TodoList;

