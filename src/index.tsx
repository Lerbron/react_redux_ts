import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from'react-redux';
import { createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import AppRoutes from './routes';
import reducers from 'reducers/index';
import 'assets/style.scss'


const store = createStore(reducers,applyMiddleware(thunkMiddleware));

function App() {
  return(
    <Provider store={store as any}>
      <AppRoutes />
    </Provider>
  )
}

ReactDOM.render(<App/>,document.getElementById('app'));