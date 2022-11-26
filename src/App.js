import Header from './components/Header';
import Body from './components/Body';

import './App.css';

import ListProvider from './store/ListProvider';

function App() {
  return (
    <ListProvider>
      <div className="App">
        <Header />
        <Body />
      </div>
    </ListProvider>
  );
}

export default App;
