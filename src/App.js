import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppRouter from './components/router';
import store from './Store/index';
import {Provider} from 'react-redux';
import Parent from './components/parent';
import Home from './screens/home';

function App() {

  return (
    <Provider store={store}>
     <Home/>
   </Provider>
  );
}

export default App;
 