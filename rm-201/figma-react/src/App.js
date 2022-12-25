import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import AllRoutes from './Pages/AllRoutes';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <AllRoutes/>
     {/* <About/> */}
    </div>
  );
}

export default App;
