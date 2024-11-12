import { buy_book } from "./bookType"

const intialState={
    NumberOfBooks:20
}
const BookReducer=(state=intialState,action)=>{
switch(action.type){
    case buy_book:return {
        ...state,NumberOfBooks :state.NumberOfBooks-1
    }
    default :return state;
}
}
export default BookReducer;