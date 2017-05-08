export function addTodo(todo){
    return {
        type: "ADD_TODO",
        payload: {
            todo: todo,
            completed: false
        }
    }
}

export function deleteTodo(index){
    return {
        type: "DELETE_TODO",
        payload: {
            index: index
        }
    }
}

export function deleteCompletedTodo(){
    return {
        type: "DELETE_COMPLETED_TODO"
    }
}

export function editTodo(index, todo){
    return {
        type: "EDIT_TODO",
        payload: {
            index: index,
            todo: todo
        }
    }
}

export function completeTodo(index){
    return {
        type: "COMPLETE_TODO",
        payload: {
            index: index
        }
    }
}