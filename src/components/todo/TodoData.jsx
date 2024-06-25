const TodoData = (props) => {
    // props là một biến object
    const { name, age, data } = props; // Object destructuring
    console.log(props)
    return (
        <div className="todo-data">
            <div>My name is {name}</div>
            <div>Learning React</div>
            <div>Watching Youtube</div>
        </div>
    )
}
export default TodoData;