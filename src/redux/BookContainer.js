import React from 'react'
import { Provider, useDispatch, useSelector } from 'react-redux'
import purches_book from './BookAction';

function BookContainer() {
    const numOfBooks=useSelector(state =>state.NumberOfBooks)
    const dispatch= useDispatch();
  return (
     <div>
      <h2>bo_ok Container</h2>
      <h3>No of Books  {numOfBooks}</h3>
      <button onClick={()=>(dispatch(purches_book()))}>Buy Book</button>
    </div>
  )
}

export default BookContainer
