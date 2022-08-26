import '../styles/App.css';

function Navbar() {
  return (
    <div className="menu">
        <div className='bienvenido'>
        <h1>Bienvenido! </h1>
        </div>

        <div className='items'>
        <ul>
          <li>Home</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
        </div>
    </div>
    
  );
}

export default Navbar;