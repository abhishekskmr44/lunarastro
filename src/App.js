import './App.css';
import Navbar from './components/Navbar';
import {  Route, Routes } from 'react-router-dom';
import Aries from './pages/Aries';
import Taurus from './pages/Taurus';
import Gemini from './pages/Gemini';
import Cancer from './pages/Cancer';
import Leo from './pages/Leo';
import Virgo from './pages/Virgo';
import Libra from './pages/Libra';
import Scorpio from './pages/Scorpio';
import Saggiatrius from './pages/Saggiatrius';
import Capricorn from './pages/Capricorn';
import Aqauarius from './pages/Aqauarius';
import Pisces from './pages/Pisces';



function App() {
  return (
  
    <Routes>
      <Route path="/" element={<Navbar/>}/>
      <Route path="/aries" element={<Aries/>}/>
      <Route path="/taurus" element={<Taurus/>}/>
      <Route path="/gemini" element={<Gemini/>}/>
      <Route path="/cancer" element={<Cancer/>}/>
      <Route path="/leo" element={<Leo/>}/>
      <Route path="/virgo" element={<Virgo/>}/>
      <Route path="/libra" element={<Libra/>}/>
      <Route path="/scorpio" element={<Scorpio/>}/>
      <Route path="/saggitarius" element={<Saggiatrius/>}/>
      <Route path="/capricorn" element={<Capricorn/>}/>
      <Route path="/aquarius" element={<Aqauarius/>}/>
      <Route path="/pisces" element={<Pisces/>}/>
      
    </Routes>
  );
}

export default App;