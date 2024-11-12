import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux';
import store from "./redux/Store";
import BookContainer from './redux/BookContainer';
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <BookContainer/>
    </div>
    </Provider>
  );
}

export default App;
