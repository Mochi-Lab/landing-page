import logo from 'assets/images/logo.png';
import { CloseOutlined, UnorderedListOutlined } from '@ant-design/icons';
import './style.css';
import { useState } from 'react';

export default function Navbar() {
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
