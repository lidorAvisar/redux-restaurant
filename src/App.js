import logo from './logo.svg';
import './App.css';
import Approuters from './routers/Approuters';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import creatSlice from './features/creatSlice'

function App() {

  const myStore = configureStore({
    reducer: {
     creatSlice
    }
  })

  return (
    <Provider store={myStore}>
      <Approuters />
    </Provider>
  );
}

export default App;
