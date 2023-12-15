import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
    return ( 
        <nav>
            <div className="Navtab">
                <div>
                    <img src="https://admission.ug.edu.gh/applying/sites/default/files/ug-admsn-logo_5.jpg"/>
                    
                </div>
                <div className='linktopages'>
                    <div><Link to="/">Home</Link></div>
                  
               
               
               
               
               
               
        
        
                </div>

            </div>
        </nav>
     );
}
 
export default Navigation;