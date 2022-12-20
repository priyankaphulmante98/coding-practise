
import { Box } from '@chakra-ui/react';
import './App.css';
import Home from './ReactEcommerce/Pages/Home';
import ProductsNavbar from './ReactEcommerce/Pages/Navbar';
import Products from './ReactEcommerce/Pages/Products';
import AllRoutes from './ReactEcommerce/Routes/AllRoutes';


// import Footersection from './zee5/pages/Footer';
// import Navbar from './zee5/pages/Navbar';
// import Allroutes from './zee5/Routes/Allroutes';
// import Todo from './Components/Todo';



function App() {
  return (
    <Box >
   {/* <Todo/> */}
  {/* <Navbar />
  <Box minH={'50vh'}>
    
  <Allroutes/>
  </Box>
  <Footersection /> */}
  <ProductsNavbar/>
  {/* <Home /> */}
  <AllRoutes />
    </Box>
  );
}

export default App;
