import logo from './logo.svg';
import './App.css';
import Header from './component/page/Header';
import Home from './component/page/Home';
import Footer from './component/page/Footer';
import WordPressPosts from './component/page/Postsnew';
import Menus from './component/page/Menus';
import Products from './component/page/Products';

function App() {
  return (
    <div className="App">
      <Header/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React

        </a>
      </header>
      <Home/>
      <WordPressPosts/>
      <Menus/>
      <Products/>
      <Footer/>
    </div>
  );
}

export default App;
