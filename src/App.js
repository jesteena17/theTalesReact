
import './App.css';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import HomePage from './pages/homepage/HomePage';

 const BabyPage=()=>{
  return <div>Baby page</div>
}

function App() {
  return (
    <div>

      <BrowserRouter>
    
      <Routes>
<Route exact path="/" element={<HomePage/>}/>
<Route  path="/babies" element={<BabyPage/>}/>

      </Routes>
      
      </BrowserRouter>
   
    </div>
  );
}

export default App;
