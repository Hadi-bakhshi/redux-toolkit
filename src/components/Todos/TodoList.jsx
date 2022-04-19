import React, { useEffect } from "react";
import TodoItem from "./TodoItem";
import { useSelector,useDispatch } from "react-redux";
import { getAsyncTodos } from "../../features/todos/todosSlice";

const TodoList = () => {

const {todos,error, loading} = useSelector(state => state.todos);
const dispatch = useDispatch();


useEffect(()=> {
  dispatch(getAsyncTodos())
},[])

if(loading) return <p>Loading...</p>

if(error) return <p>{error}</p>

  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoItem key={todo.id} id={todo.id} {...todo} />
      ))}
    </ul>
  );
};

export default TodoList;
