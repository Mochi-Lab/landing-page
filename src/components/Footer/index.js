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
          <p className='address'>2464 Royal Ln. Mesa, New Jersey 45463</p>
        </div>
        <div>
          <p className='address'>info@mochilab.com</p>
        </div>
      </div>
      <div className='center flc'>
        <p className='footer-community'>Our Community</p>
        <div className='footer-community-icon'>
          <div>
            <img src={tele} alt='tele' />
          </div>
          <div>
            <img src={twitter} alt='twitter' />
          </div>
          <div>
            <img src={medium} alt='medium' />
          </div>
          <div>
            <img src={discord} alt='discord' />
          </div>
        </div>
      </div>
      <div className='copyright center'>
        <p className='copyright-font'>© Copyright 2021, MochiLab</p>
      </div>
    </div>
  );
}
