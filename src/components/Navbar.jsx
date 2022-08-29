import '../styles/App.css';

function Navbar() {
  return (
    <div className="navbar-container">
        <div className='saludo'><h1>Bienvenido!</h1></div>

        <div className='items'>
        <ul>
          <li>Contáctame</li>
          <li>Colaboradores</li>
          <li>Cuentas</li>
          <li>Proyectos</li>
        </ul>
        </div>
    </div>
    
  );
}

export default Navbar;