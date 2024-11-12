import React from 'react'
import { Provider, useDispatch, useSelector } from 'react-redux'
import purches_book from './BookAction';
import { buy_book, return_book } from './bookType';

function BookContainer() {
    const numOfBooks=useSelector(state =>state.NumberOfBooks)
    const dispatch= useDispatch();
    const bbooks=()=>{
        dispatch({type:buy_book})
    };
    const returnBook =()=>{
        dispatch({type:return_book})
    };
  return (
     <div>
      <h2>bo_ok Container</h2>
      <h3>No of Books  {numOfBooks}</h3>
      <button onClick={bbooks}>Buy Book</button>
      <button onClick={returnBook}>return book</button>
    </div>
  )
}

export default BookContainer
