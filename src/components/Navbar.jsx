import '../styles/App.css';

function Navbar() {
  return (
    <div>
      <h1>Bienvenido! </h1>
        <ul className="menu">
          <li className="items">Home</li>
          <li className="items">Services</li>
          <li className="items">Contact</li>
        </ul>
    </div>
    
  );
}

export default Navbar;