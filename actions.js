export const addTodoAction = (data) => {
    return {
        type: 'action/Added',
        payload: data
    }
}

export const deleteTodoAction = (data) => {
    return {
        type: 'action/Deleted',
        payload: data
    }
}

export const editTodoAction = (data) => {
    return {
        type: 'action/Edit',
        payload: data
    }
}

export const saveTodoAction = (data) => {
    return {
        type: 'action/Save',
        payload: data
    }
}