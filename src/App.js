
import {Routes,Route}from 'react-router-dom';
import Homee from './pages/Homee';
import Cart from './pages/Cart';
import Navbar from './Component/Navbar'
function App() {

  return (
    <div className="App">
     
      <Navbar/>
      <Routes>
        <Route path ='/' element={<Homee />}></Route>
        <Route path ='/cart' element={<Cart />}></Route>
      </Routes>
    </div>
  );
}

export default App;
