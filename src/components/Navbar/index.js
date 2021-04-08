import logo from 'assets/images/logo.png';
import './style.css';

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='header container'>
        <div className='logo'>
          <img src={logo} alt='logo-mochi' />
        </div>
        <div className='menu-right'>
          <ul>
            <li>Home</li>
            <li>Developer Hub</li>
            <li>Document</li>
            <li>Document</li>
            <li>About</li>
            <li>
              <button className='btn-launch-app'>Launch App</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
