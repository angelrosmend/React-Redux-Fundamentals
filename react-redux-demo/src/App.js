import './App.css';
import store from './redux/store'
import { Provider } from 'react-redux'
import CakeContainer from './components/CakeContainer.jsx';
import HooksCakeContainer from './components/HooksCakeContainer.jsx';
import IceCreamContainer from './components/IceCreamContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer/>
        <HooksCakeContainer/>
        <IceCreamContainer/>
      </div>
    </Provider>
  );
}

export default App;
