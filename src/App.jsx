
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Writer from './pages/Writer';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/writer/:slug' element={<Writer/>}/>
      </Routes>
<Home/>
    </div>
  );
}

export default App;
