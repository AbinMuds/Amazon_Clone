 import './App.css';
 import Header from './Header';
 import Home from './Home';

function App() {
  return (
    //BEM convention // good for styling // we will change App to app
    <div className="app">
      {/* Header component  */}
      <Header />
      {/* Home */}
      <Home />

    </div>
  );
}

export default App;
