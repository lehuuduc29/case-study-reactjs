import TodoListItem from './TodoListItem';
import { useSelector } from 'react-redux'

const selectTodos = (state) => {return(state.actions)}

export default function TodoList() {
    const actions = useSelector(selectTodos)
    return (
      <div className='container-list'>
        {actions.map(todo => {
          return (
            <TodoListItem todo= { todo } key={ todo.id } />
          );
        })}
      </div>
    );
}