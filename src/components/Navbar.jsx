import '../styles/App.css';
import Contact from './Contacto';

function Navbar() {
  return (
    <div className="navbar-container">

        <div className='items'>
        <ul>
          
        <button onClick={shoot}><li>ABOUT ME</li></button>
          <button onClick={mostrarSkills}><li>SKILLS</li></button>
          <button onClick={shoot}><li>PROJECTS</li></button>
          <button onClick={shoot}><li>ACOUNTS</li></button>
          <button onClick={shoot}><li>CONTACT ME</li></button>
        </ul>
        </div>
    </div>
    
  );
}


function shoot() {
  return (
    alert(1)
  )
}

function mostrarSkills(){
  
}

export default Navbar;