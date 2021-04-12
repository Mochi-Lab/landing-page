import './style.css';
// import { ArrowRightOutlined } from '@ant-design/icons';
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
            Want to be a part of Mochi.Market? <br />
            Join the discussion!
          </h1>
        </div>
        <div className='box-community'>
          <div className='row'>
            <div className='col-6 col-md-3 mb-5'>
              <div className='item-community'>
                <a href='https://t.me/mochi_market' target='_blank' rel='noreferrer'>
                  <div className='icon'>
                    <img src={iconTele} alt='Telegram' />
                  </div>
                  <div className='name'>Telegram</div>
                </a>
                {/* <div className='descriptions'>
                  Chat with us or get news everyday via our Telegram channel
                </div> */}
                {/* <div className='btn-redirect'>
                  <a href='https://t.me/mochi_market' target='_blank' rel='noreferrer'>
                    Contact <ArrowRightOutlined />
                  </a>
                </div> */}
              </div>
            </div>
            <div className='col-6 col-md-3 mb-5'>
              <div className='item-community'>
                <a href='https://twitter.com/MarketMochi' target='_blank' rel='noreferrer'>
                  <div className='icon'>
                    <img src={iconTwitter} alt='Twitter' />
                  </div>
                  <div className='name'>Twitter</div>
                </a>
                {/* <div className='descriptions'>For all our latest posts on all things Mochi</div> */}
                {/* <div className='btn-redirect'>
                  <a href='https://twitter.com/MarketMochi' target='_blank' rel='noreferrer'>
                    Follow Us <ArrowRightOutlined />
                  </a>
                </div> */}
              </div>
            </div>
            <div className='col-6 col-md-3 mb-5'>
              <div className='item-community'>
                <a href='https://mochi-market.medium.com/' target='_blank' rel='noreferrer'>
                  <div className='icon'>
                    <img src={iconMedium} alt='Medium' />
                  </div>
                  <div className='name'>Medium</div>
                </a>
                {/* <div className='descriptions'>For our Portfolio and Daily activities in office</div> */}
                {/* <div className='btn-redirect'>
                  <a href='https://mochi-market.medium.com/' target='_blank' rel='noreferrer'>
                    Follow Us <ArrowRightOutlined />
                  </a>
                </div> */}
              </div>
            </div>
            <div className='col-6 col-md-3 mb-5'>
              <div className='item-community'>
                <a href='https://discord.gg/ZHq7arVS' target='_blank' rel='noreferrer'>
                  <div className='icon'>
                    <img src={iconDiscord} alt='Discord' />
                  </div>
                  <div className='name'>Discord</div>
                </a>
                {/* <div className='descriptions'>
                  Chat with us or get news everyday via our Discord channel
                </div> */}
                {/* <div className='btn-redirect'>
                  <a href='https://discord.gg/ZHq7arVS' target='_blank' rel='noreferrer'>
                    Join Us <ArrowRightOutlined />
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
