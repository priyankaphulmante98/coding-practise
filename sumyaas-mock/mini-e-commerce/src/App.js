
import "./App.css";
import { Routes ,Route} from 'react-router-dom'
import ProductPage from './Components/Pages/ProductPage'
import ProdcutDetails from './Components/Pages/ProdcutDetails'

import Cart from './Components/Pages/Cart'
import Order from './Components/Pages/Order'


function App() {


  
  return (
    <div className="App">
      <Routes>
            <Route path='/' element={<ProductPage/>}/>
            <Route path='/:id' element={<ProdcutDetails/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/order' element={<Order/>}/>
        </Routes>
    </div>
  );
}

export default App;
