import { Reset } from 'styled-reset';
import { Provider } from 'react-redux'
import './App.css';
import store from './redux/store'
import Home from './pages/Home';
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <Provider store={store}>
      <Reset/>
      <Home />      
    </Provider>
  );
}

export default App;

