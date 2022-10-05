import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Landing from './Pages/Landing';
import Home from './Pages/Home';

import './App.css';
import About from './Components/About';

function App() {
  return (
    // <div className='container' name='app'>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Landing />} />
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
    // </div>
  );
}

export default App;
