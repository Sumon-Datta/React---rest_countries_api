import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './components/Products/Products';
import Menu from './components/Menu/Menu';
import { useEffect, useState } from 'react';

function App() {

  let [count, setCount ] = useState(0);

  
  let addCartCount = () =>{
    setCount(count+1)
  }

  let removeCartCount = () =>{
    setCount(count - 1)
  }
  
  // useEffect(()=>{

  // },[])

  return (
    <div className="App">
      <Menu count = {count}></Menu>
      <Products addCartCount = {addCartCount} removeCartCount = {removeCartCount}></Products>
    </div>


  );
}

export default App;
