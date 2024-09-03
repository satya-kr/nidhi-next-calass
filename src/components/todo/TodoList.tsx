const TodoList = ({list, actions}:any) => {
    return (
        <table 
            style={{
                width: '50%',
            }}  
            border={1}
            cellPadding={5}
            cellSpacing={0}
        >
            <tr>
                <th>Id</th>
                <th>Task</th>
                <th>Status</th>
                <th>Action</th>
            </tr>
            {
                list.length > 0  &&
                list.map((todo:any, i:number) => (
                    <tr key={i}>
                        <td>{todo?.id}</td>
                        <td>{todo?.task}</td>
                        <td>{todo?.status}</td>
                        <td>
                            <button onClick={() => actions(todo.id)}>Edit</button>
                        </td>
                    </tr>
                ))
            }
        </table>
    )
}

export default TodoList