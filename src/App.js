import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './main';
import Card from './card';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path= '/' element={<Main/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
