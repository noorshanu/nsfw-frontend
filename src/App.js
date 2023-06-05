import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import NotAllowed from './Pages/NotAllowed';
import Wrapper from './Components/Wrapper';


function App() {
  return (
    <>
    <Router>
      <Routes>

        <Route exact path='/' element={<Wrapper/>}/>
        <Route exact path='/notallowed' element={<NotAllowed/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
