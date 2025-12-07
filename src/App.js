import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './main';
import PersonalCab from './personalCab';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path= '/' element={<Main/>}></Route>
          <Route path= '/personalCab' element={<PersonalCab/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
