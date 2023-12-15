import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import './App.css';
import LandingPage from './LandingPage';
import Navigation from './Navigation';
import LoginPage from './LoginPage';
import DashBoard from './DashBoard';
import Missinggradeform from './Missinggradeform';
import InstructorContactPage from './InstructorContactPage';
import HelpAndSupportPage from './HelpAndSupportPage';
import Studentgradereport from './Studentgradereport';
import Footer from './Footer';






function App() {
  return (
    <Router>
   
    <div className="App">
      <Navigation/>
       
     
     
      <Routes>
       
      
        <Route exact path="/" element={<LandingPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/dashboard" element={<DashBoard/>} />
        <Route path="/missinggrade" element={<Missinggradeform/>} />
        <Route path="/contactpage" element={<InstructorContactPage/>} />
        <Route path="/helpAndSupportPage" element={<HelpAndSupportPage/>} />
        <Route path="/studentgradereport" element={<Studentgradereport/>} />
         
          
          
          </Routes>
          <Footer/>
    </div>
   
    </Router>
  );
}

export default App;
