
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import ShopPage from './pages/shop/ShopPage';



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
<Route  path="/shop" element={<ShopPage/>}/>

      </Routes>
      
   
    </div>
  );
}

export default App;
