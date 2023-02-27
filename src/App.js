import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShowProducts from './components/ShowProducts';

function App() {
  return (
    <div className="App">
      <h1>Frontend React App's</h1>
      
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<ShowProducts/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
