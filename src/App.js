
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import ShopPage from './pages/shop/ShopPage';
import Header from './components/header/header';
import SignUpIn from './pages/signupin/SignUpIn';

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

    <Header/>
      <Routes>
<Route  path="/" element={<HomePage/>}/>
<Route  path="/shop" element={<ShopPage/>}/>
<Route  path="/login" element={<SignUpIn/>}/>

      </Routes>
      
   
    </div>
  );
}

export default App;
