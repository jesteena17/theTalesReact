
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/homepage/HomePage';

 const BabyPage=(props)=>{
   console.log(props);
  return <div>Baby page</div>
}

const BabyDetailPage=()=>{
  return <div>Baby detail page</div>
}
function App() {
  return (
    <div>

    
      <Routes>
<Route  path="/" element={<HomePage/>}/>
<Route  path="/babies" element={<BabyPage/>}/>
<Route  path="/babies/:bdid" element={<BabyDetailPage/>}/>

      </Routes>
      
   
    </div>
  );
}

export default App;
