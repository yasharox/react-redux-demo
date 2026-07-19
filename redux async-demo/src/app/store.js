import { configureStore } from "@reduxjs/toolkit";
import counterSlicerReducer from "../features/counterSlice";
import todoSliceReducer from "../features/todoSlice";
import productSliceReducer from "../features/productSlice";

/*After 
install npm i @reduxjs/toolkit
npm i react-redux*/

// step -1 create a global store
export const store = configureStore({
  reducer: {
    counterState: counterSlicerReducer, // register in the store
    todoList: todoSliceReducer,
    productState: productSliceReducer,
  },
});
