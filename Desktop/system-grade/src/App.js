import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './Pages/Homepage';
import Navigation from './Pages/Navigation';
import Footer from './Pages/Footer';






function App() {
  return (
    <Router>
   
    <div className="App">
      <Navigation/>
       
     
     
      <Routes>
       
      
        <Route exact path="/" element={<Homepage/>} />
        
         
          
          
          </Routes>
          <Footer/>
    </div>
   
    </Router>
  );
}

export default App;
