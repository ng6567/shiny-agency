import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import Home from '../pages/Home';
import Survey from '../pages/Survey';
import NotFound from '../pages/NotFound'
import Results from '../pages/Results';
import Freelances from '../pages/Freelances';





function App() {
  return (
    <div className="App">
     <Header/>
     <Routes>
     <Route path='/' element = {<Home/>}></Route>
     <Route path='/Survey/1' element ={<Survey/>}></Route>
     <Route path='/Results' element={<Results/>} ></Route>
     <Route path='/Freelances' element={<Freelances/>}></Route>
     <Route path='*' element={<NotFound/>} ></Route>
     </Routes>
    </div>
  );
}

export default App;
