import './style.css';
import iconHighTicketSize from 'assets/icons/iconHighTicketSize.png';
import iconNotProfitable from 'assets/icons/iconNotProfitable.png';
import iconDifficultToSell from 'assets/icons/iconDifficultToSell.png';
import iconFrictionCosts from 'assets/icons/iconFrictionCosts.png';

export default function TheProblems() {
  return (
    <div className='the-problems'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-4'>
            <div className='title-problems'>
              <h1>The Problems</h1>
              <p>What the early NFT adopters are saying:</p>
            </div>
          </div>
          <div className='col-12 col-md-8'>
            <div className='list-problems'>
              <div className='row'>
                <div className='col-12  col-md-6'>
                  <div className='item-problem'>
                    <div className='icon-problem'>
                      <img src={iconHighTicketSize} alt='high ticket size' />
                    </div>
                    <div className='title-item'>High Ticket Size</div>
                    <div className='description-item'>
                      Buying an NFT is expensive (high ticket size) and costly (high transaction
                      fee)
                    </div>
                  </div>
                </div>
                <div className='col-12  col-md-6'>
                  <div className='item-problem'>
                    <div className='icon-problem'>
                      <img src={iconNotProfitable} alt='not profitable' />
                    </div>
                    <div className='title-item'>Not Profitable</div>
                    <div className='description-item'>
                      Holding NFT is not profitable (not a yielding asset, no utility for NFTs)
                    </div>
                  </div>
                </div>
                <div className='col-12  col-md-6'>
                  <div className='item-problem'>
                    <div className='icon-problem'>
                      <img src={iconDifficultToSell} alt='difficult to sell' />
                    </div>
                    <div className='title-item'>Difficult To Sell</div>
                    <div className='description-item'>Liquidity problems.</div>
                  </div>
                </div>
                <div className='col-12  col-md-6'>
                  <div className='item-problem'>
                    <div className='icon-problem'>
                      <img src={iconFrictionCosts} alt='friction costs' />
                    </div>
                    <div className='title-item'>Friction Costs</div>
                    <div className='description-item'>
                      Friction costs and untapped participants (lack of interoperability)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
