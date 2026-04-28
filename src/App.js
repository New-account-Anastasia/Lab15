import Footer from './components/Footer/index.jsx';
import Head from './components/Head/index.jsx';
import Main from './components/Main/index.jsx';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Head />
      <Main />
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
