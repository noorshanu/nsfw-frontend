import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';
import NotAllowed from './Pages/NotAllowed';


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/notallowed' element={<NotAllowed/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
