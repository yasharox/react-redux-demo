import React from "react";
import "./App.css";
import ProductListOptimised from "./components/ProductListOptimised";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "./features/counterSlice";
import { addTodo } from "./features/todoSlice";
// import { addTodo } from "./features/todoSlice";

export default function App() {
  // select the state from the store

  const counterState = useSelector((store) => store.counterState);
  console.log(counterState);

  const todoList = useSelector((store) => store.todoList);

  const dispatch = useDispatch();

  return (
    <div>
      <h1> Redux-Demo-2</h1>
      <h2>count : {counterState.count}</h2>
      <ul>
        {todoList.todos.map((todo, idx) => {
          return <li key={idx}> {todo} </li>;
        })}
      </ul>
      <button onClick={() => dispatch(addTodo("Learn Crypto soon"))}>
        Add Todo
      </button>
      <button onClick={() => dispatch(increment())}>++</button>
      <button onClick={() => dispatch(decrement())}>--</button>
      <button onClick={() => dispatch(incrementByAmount(10))}>+10</button>
      <ProductListOptimised />
    </div>
  );
}
