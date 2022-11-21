// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Body from './components/Body';
import CreatQuiz from './components/CreatQuiz';
import X from './components/Creat';
import Addquestion from './components/Addquestion';
import Pra from './components/Pra';
import Ak from './components/Ak' 
import Preview from './components/Preview';
import Give from './components/Give';
import LoadQuestion from './components/LoadQuestion';
import LoadTest from './components/LoadTest';
import Footer from './components/Footer';
import Result from './components/Result';
import About from './pages/About';


function App() {
  return (
 
<>




 {/* Here we use react router dom for sellective rendering  */}

<BrowserRouter>

<Navbar></Navbar>



    <Routes>
      <Route path='/about' element={<About/>}></Route>
      <Route path ='/' element={<Body></Body>}></Route>
      <Route path='/Creat' element={<X></X>}></Route>
      <Route path='/CreatQuiz' element={<CreatQuiz></CreatQuiz>}></Route>
      <Route path='/Addquestion' element={  <Addquestion></Addquestion>}></Route>
      <Route path='/Preview' element={  <Preview></Preview>}></Route>
      <Route path='/Give' element={  <Give></Give>}></Route>
      <Route path='/LoadTest' element={<LoadTest></LoadTest>}>alsdjflak;sf</Route>
      <Route path='/Result' element={<Result></Result>}></Route>
    </Routes>
    
  </BrowserRouter>


  <Footer></Footer>

{/* <Result></Result> */}

</>


  );
}

export default App;
