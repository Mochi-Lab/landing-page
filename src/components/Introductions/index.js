import './style.css';
import imgIntroductions from 'assets/images/img-introductions.png';

export default function Introductions() {
  return (
    <div className='introductions'>
      <div className='container'>
        <div className='row justify-content-between wrap-intro'>
          <div className='col-sm-12 col-md-6'>
            <div className='text-introductions'>
              <div className='slogan-intro'>
                <h1>The multi-chain decentralized exchange ecosystem for non-fungible tokens</h1>
              </div>
              <div className='description-intro'>
                Mochi.Market is the first product of Mochilab.org - a team dedicated to developing
                practical and innovative technological solutions to enable a seamless web3 NFT
                economy.
              </div>
              <button className='btn-launch-app'>Launch App</button>
            </div>
          </div>
          <div className='col-sm-12 col-md-6'>
            <div className='img-introductions'>
              <img src={imgIntroductions} alt='img-introductions' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
