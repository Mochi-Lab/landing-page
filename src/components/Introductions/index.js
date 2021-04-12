import './style.css';
import imgIntroductions from 'assets/images/img-introductions.png';

export default function Introductions() {
  const mochilabURL = 'https://mochilab.org';
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
                <p>
                  {' '}
                  Mochi.Market is the first product of{' '}
                  <a href={mochilabURL} target='_blank' rel='noreferrer'>
                    Mochilab.org
                  </a>
                  .
                </p>
                Mochi.Market initially aims to solve three important current challenges: lack of
                liquidity in the NFT market, lack of monetization strategy for NFT holders during
                their holding period, and lack of crosschain usage between NFTs and FTs.
              </div>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href={`${process.env.PUBLIC_URL}/WhitePaper.pdf`}
              >
                <button className='btn-launch-app'>DOWNLOAD WHITE PAPER</button>
              </a>
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
