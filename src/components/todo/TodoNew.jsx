const TodoNew = (props) => {
    const { addNewTodo } = props
    // addNewTodo("eric")
    const handleClick = () => {
        alert("click me")
    }

    const handleOnChange = (name) => {
        console.log(name)
    }
    return (
        <div className="todo-new">
            <input onChange={(event) => handleOnChange(event.target.value)} type="text" />
            <button onClick={handleClick}>Add</button>
        </div>
    )
}
export default TodoNew;