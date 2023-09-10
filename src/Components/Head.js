import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom';
import {ImFacebook} from 'react-icons/im';
import {FiInstagram} from 'react-icons/fi';
import {BsGithub} from 'react-icons/bs';
import { Projects } from './My projects';
import App from '../App';
import { About } from './About';

export const Head =()=>{
    return(
        <div className="container-fix" id='HD'>
            <div className="row">
                <div className="col-6" id='social'>
                <a href='https://www.facebook.com/mohamedseghir.abdelmalek/'><button className='btn fw-medium'  id='social1'><ImFacebook/> facebook</button></a>
                <a href="https://www.instagram.com/mo7_seghir/"><button className='btn fw-medium' id='social2'><FiInstagram/> Instagram</button></a>
                <a href="https://github.com/med1seghir5/med1seghir5" ><button className='btn fw-medium'  style={{color:"#ffffff"}}><BsGithub/> github</button></a>
                </div>
                <div className="col-6" id='button'>
                      <div id='button2'>
                        <Link to="/src/Components/About.js"><p className="btn fw-medium" id='Projects' >My projects</p></Link>
                        <Link to="/"><p className="btn fw-medium" id='Home'>Home</p></Link>
                        <Link><p className="btn fw-medium" style={{color:"#eff3f7"}} >About me</p></Link>
                        <Routes>
                            <Route path='/Projects' element={<Projects />}/>
                            <Route path='/src/Components/About.js' Component={About} />
                        </Routes>                     
                      </div>
                </div>
            </div>
        </div>
    );
}