import logo from 'assets/images/logo.png';
import { CloseOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { Menu, Dropdown, Grid } from 'antd';
import './style.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const { useBreakpoint } = Grid;
const { SubMenu } = Menu;

export default function NavbarMenu({ executeScroll }) {
  const [btnMenu, setBtnMenu] = useState(false);

  const { lg } = useBreakpoint();

  return (
    <div className='navbar-ct'>
      <div className='header container'>
        <div className='logo'>
          <Link to='/' style={{ cursor: 'pointer' }}>
            <img src={logo} alt='logo-mochi' />
          </Link>
        </div>
        <div className='btn-menu' onClick={() => setBtnMenu(!btnMenu)}>
          {btnMenu ? <CloseOutlined /> : <UnorderedListOutlined />}
        </div>
        <div className={`menu-right ${btnMenu ? 'active' : ''}`}>
          <ul>
            {/* <li onClick={() => executeScroll('Solutions')}>Solutions</li>
            <li onClick={() => executeScroll('Features')}>Features</li>
            <li onClick={() => executeScroll('Token')}>Token</li>
            <li onClick={() => executeScroll('Roadmap')}>Roadmap</li>
            <li onClick={() => executeScroll('Team')}>Team</li> */}

            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              {lg ? (
                <Dropdown
                  overlay={
                    <Menu>
                      <Menu.Item key='onePage'>
                        <a
                          target='_blank'
                          rel='noopener noreferrer'
                          href={`${process.env.PUBLIC_URL}/OnePage.pdf`}
                        >
                          One Page
                        </a>
                      </Menu.Item>
                      <Menu.Item key='pitchDeck'>
                        <a
                          target='_blank'
                          rel='noopener noreferrer'
                          href={`${process.env.PUBLIC_URL}/PitchDeck.pdf`}
                        >
                          Pitch Deck
                        </a>
                      </Menu.Item>
                      <Menu.Item key='lightPaper'>
                        <a
                          target='_blank'
                          rel='noopener noreferrer'
                          href={`${process.env.PUBLIC_URL}/LightPaper.pdf`}
                        >
                          Light Paper
                        </a>
                      </Menu.Item>
                      <Menu.Item key='whitePaper'>
                        <a
                          target='_blank'
                          rel='noopener noreferrer'
                          href={`${process.env.PUBLIC_URL}/WhitePaper.pdf`}
                        >
                          White Paper
                        </a>
                      </Menu.Item>
                    </Menu>
                  }
                >
                  <span>TGE Documents</span>
                </Dropdown>
              ) : (
                <Menu mode='inline' title='TGE Documents' style={{ background: 'none' }}>
                  <SubMenu key='documents' title='TGE Documents'>
                    <Menu.ItemGroup>
                      <Menu.Item key='onePageM'>
                        <a
                          target='_blank'
                          rel='noopener noreferrer'
                          href={`${process.env.PUBLIC_URL}/OnePage.pdf`}
                        >
                          One Page
                        </a>
                      </Menu.Item>
                      <Menu.Item key='pitchDeckM'>
                        <a
                          target='_blank'
                          rel='noopener noreferrer'
                          href={`${process.env.PUBLIC_URL}/PitchDeck.pdf`}
                        >
                          Pitch Deck
                        </a>
                      </Menu.Item>
                      <Menu.Item key='lightPaperM'>
                        <a
                          target='_blank'
                          rel='noopener noreferrer'
                          href={`${process.env.PUBLIC_URL}/LightPaper.pdf`}
                        >
                          Light Paper
                        </a>
                      </Menu.Item>
                      <Menu.Item key='whitePaperM'>
                        <a
                          target='_blank'
                          rel='noopener noreferrer'
                          href={`${process.env.PUBLIC_URL}/WhitePaper.pdf`}
                        >
                          White Paper
                        </a>
                      </Menu.Item>
                    </Menu.ItemGroup>
                  </SubMenu>
                </Menu>
              )}
            </li>
            <li>
              {lg ? (
                <Dropdown
                  overlay={
                    <Menu>
                      <Menu.Item key='telegram'>
                        <a
                          target='_blank'
                          rel='noopener noreferrer'
                          href='https://t.me/mochi_market'
                        >
                          Telegram
                        </a>
                      </Menu.Item>
                      <Menu.Item key='twitter'>
                        <a
                          target='_blank'
                          rel='noopener noreferrer'
                          href='https://twitter.com/MarketMochi'
                        >
                          Twitter
                        </a>
                      </Menu.Item>
                      <Menu.Item key='medium'>
                        <a
                          target='_blank'
                          rel='noopener noreferrer'
                          href='https://mochi-market.medium.com/'
                        >
                          Medium
                        </a>
                      </Menu.Item>
                      <Menu.Item key='discord'>
                        <a
                          target='_blank'
                          rel='noopener noreferrer'
                          href='https://discord.gg/ZHq7arVS'
                        >
                          Discord
                        </a>
                      </Menu.Item>
                    </Menu>
                  }
                >
                  <span>Community</span>
                </Dropdown>
              ) : (
                <Menu mode='inline' title='Community' style={{ background: 'none' }}>
                  <SubMenu key='community' title='Community'>
                    <Menu.ItemGroup>
                      <Menu.Item key='telegramM'>
                        <a
                          target='_blank'
                          rel='noopener noreferrer'
                          href='https://t.me/mochi_market'
                        >
                          Telegram
                        </a>
                      </Menu.Item>
                      <Menu.Item key='twitterM'>
                        <a
                          target='_blank'
                          rel='noopener noreferrer'
                          href='https://twitter.com/MarketMochi'
                        >
                          Twitter
                        </a>
                      </Menu.Item>
                      <Menu.Item key='mediumM'>
                        <a
                          target='_blank'
                          rel='noopener noreferrer'
                          href='https://mochi-market.medium.com/'
                        >
                          Medium
                        </a>
                      </Menu.Item>
                      <Menu.Item key='discordM'>
                        <a
                          target='_blank'
                          rel='noopener noreferrer'
                          href='https://discord.gg/ZHq7arVS'
                        >
                          Discord
                        </a>
                      </Menu.Item>
                    </Menu.ItemGroup>
                  </SubMenu>
                </Menu>
              )}
            </li>
            <li>
              <Link to='/faq'>FAQs</Link>
            </li>

            <li>{/* <button className='btn-launch-app'>Launch App</button> */}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
