import logo from 'assets/images/logo.png';
import { CloseOutlined, UnorderedListOutlined } from '@ant-design/icons';
import './style.css';
import { useState } from 'react';

export default function Navbar({ executeScroll }) {
  const [btnMenu, setBtnMenu] = useState(false);
  return (
    <div className='navbar-ct'>
      <div className='header container'>
        <div className='logo'>
          <img src={logo} alt='logo-mochi' />
        </div>
        <div className='btn-menu' onClick={() => setBtnMenu(!btnMenu)}>
          {btnMenu ? <CloseOutlined /> : <UnorderedListOutlined />}
        </div>
        <div className={`menu-right ${btnMenu ? 'active' : ''}`}>
          <ul>
            <li onClick={() => executeScroll('Solutions')}>Solutions</li>
            <li onClick={() => executeScroll('Features')}>Features</li>
            <li onClick={() => executeScroll('Token')}>Token</li>
            <li onClick={() => executeScroll('Roadmap')}>Roadmap</li>
            <li onClick={() => executeScroll('Team')}>Team</li>
            <li>{/* <button className='btn-launch-app'>Launch App</button> */}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
