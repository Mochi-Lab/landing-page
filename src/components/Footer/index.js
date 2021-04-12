import './style.css';
import logo from 'assets/images/logo.png';
import tele from 'assets/icons/icon-tele.png';
import twitter from 'assets/icons/icon-twitter.png';
import medium from 'assets/icons/icon-medium.png';
import discord from 'assets/icons/icon-discord.png';

export default function Footer() {
  return (
    <div className='footer'>
      <div className='center fla'>
        <div>
          <img className='footer-logo' src={logo} alt='logo' />
        </div>
        <div>
          <h4>MochiLab Foundation Ltd</h4>
        </div>
        <div>
          <p className='address'>3 Fraser Street #5-25 Duo Tower, Singapore</p>
        </div>
        <div>
          <a href='mailto:contact@mochilab.org'>
            <p className='address'>contact@mochilab.org</p>
          </a>
        </div>
      </div>
      <div className='center flc'>
        <p className='footer-community'>Our Community</p>
        <div className='footer-community-icon'>
          <div className='icon-item'>
            <a href='https://t.me/mochi_market' target='_blank' rel='noreferrer'>
              <img src={tele} alt='tele' />
            </a>
          </div>
          <div className='icon-item'>
            <a href='https://twitter.com/MarketMochi' target='_blank' rel='noreferrer'>
              <img src={twitter} alt='twitter' />
            </a>
          </div>
          <div className='icon-item'>
            <a href='https://mochi-market.medium.com/' target='_blank' rel='noreferrer'>
              <img src={medium} alt='medium' />
            </a>
          </div>
          <div className='icon-item'>
            <a href='https://discord.gg/ZHq7arVS' target='_blank' rel='noreferrer'>
              <img src={discord} alt='discord' />
            </a>
          </div>
        </div>
      </div>
      <div className='copyright center'>
        <p className='copyright-font'>© Copyright 2021, MochiLab Foundation Ltd</p>
      </div>
    </div>
  );
}
