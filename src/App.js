import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import store from './Store/index';
import {Provider} from 'react-redux';
import Home from './screens/home';

function App() {

  return (
    <Provider store={store}>
     <Home/>
   </Provider>
  );
}

export default App;
 