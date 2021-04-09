import './style.css';
import { ArrowRightOutlined } from '@ant-design/icons';
import iconTele from 'assets/icons/icon-tele.png';
import iconTwitter from 'assets/icons/icon-twitter.png';
import iconMedium from 'assets/icons/icon-medium.png';
import iconDiscord from 'assets/icons/icon-discord.png';

export default function Community() {
  return (
    <div className='community'>
      <div className='container'>
        <div className='title-community'>
          <h1>
            Want to be part of Mochi.Market? <br />
            Join the discussion!
          </h1>
        </div>
        <div className='box-community'>
          <div className='row'>
            <div className='col-6 col-md-3 mb-5'>
              <div className='item-community'>
                <div className='icon'>
                  <img src={iconTele} alt='telegarm' />
                </div>
                <div className='name'>Telegarm</div>
                <div className='descriptions'>
                  Chat with us or get news everyday via Telegram channel
                </div>
                <div className='btn-redirect'>
                  <a href='#'>
                    Contact <ArrowRightOutlined />
                  </a>
                </div>
              </div>
            </div>
            <div className='col-6 col-md-3 mb-5'>
              <div className='item-community'>
                <div className='icon'>
                  <img src={iconTwitter} alt='Twitter' />
                </div>
                <div className='name'>Twitter</div>
                <div className='descriptions'>For random thoughts and funny things</div>
                <div className='btn-redirect'>
                  <a href='#'>
                    Follow Us <ArrowRightOutlined />
                  </a>
                </div>
              </div>
            </div>
            <div className='col-6 col-md-3 mb-5'>
              <div className='item-community'>
                <div className='icon'>
                  <img src={iconMedium} alt='Medium' />
                </div>
                <div className='name'>Medium</div>
                <div className='descriptions'>For our Portfolio and Daily activities in office</div>
                <div className='btn-redirect'>
                  <a href='#'>
                    Follow Us <ArrowRightOutlined />
                  </a>
                </div>
              </div>
            </div>
            <div className='col-6 col-md-3 mb-5'>
              <div className='item-community'>
                <div className='icon'>
                  <img src={iconDiscord} alt='Discord' />
                </div>
                <div className='name'>Discord</div>
                <div className='descriptions'>For our Portfolio and Daily activities in office</div>
                <div className='btn-redirect'>
                  <a href='#'>
                    Join Us <ArrowRightOutlined />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
