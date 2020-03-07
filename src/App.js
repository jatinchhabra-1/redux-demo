import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import CakeComponent from './Components/CakeComponent';
import store from './redux/CakeStore';

function App() {
  return (
    <div>
    <Provider store={store}>
      <CakeComponent />
    </Provider>
    </div>
  );
}

export default App;
