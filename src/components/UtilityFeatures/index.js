import './style.css';
import utilityFeatures from 'assets/images/UtilityFeatures.png';
import iconTick from 'assets/icons/iconTick.svg';

export default function UtilityFeatures() {
  return (
    <div className='utility-features'>
      <div className='container'>
        <div className='content-utility-features'>
          <div className='row align-items-center'>
            <div className='col-12 col-md-5'>
              <div className='description-utility-features'>
                <div className='title-utility-features'>
                  <h1>Utility features</h1>
                </div>
                <div className='text-utility-features'>
                  The $MOMA tokens give access to a number of special services on the platform, such
                  as:
                </div>
                <div className='feature-item'>
                  <div className='row'>
                    <div className='col-1 padding-0 mr-3'>
                      <div className='icon-item padding-0'>
                        <img src={iconTick} alt='icon-item' />
                      </div>
                    </div>
                    <div className='col-10 padding-0'>
                      <div className='text-item'>
                        Having a discount on transaction fees if transacted in $MOMA tokens.
                      </div>
                    </div>
                  </div>
                </div>
                <div className='feature-item'>
                  <div className='row'>
                    <div className='col-1 padding-0 mr-3'>
                      <div className='icon-item padding-0'>
                        <img src={iconTick} alt='icon-item' />
                      </div>
                    </div>
                    <div className='col-10 padding-0'>
                      <div className='text-item'>
                        Getting special offers and rewards for NFT lotteries and airdrops.
                      </div>
                    </div>
                  </div>
                </div>
                <div className='feature-item'>
                  <div className='row'>
                    <div className='col-1 padding-0 mr-3'>
                      <div className='icon-item padding-0'>
                        <img src={iconTick} alt='icon-item' />
                      </div>
                    </div>
                    <div className='col-10 padding-0'>
                      <div className='text-item'>Provide liquidity to earn more $MOMA.</div>
                    </div>
                  </div>
                </div>
                <div className='feature-item'>
                  <div className='row'>
                    <div className='col-1 padding-0 mr-3'>
                      <div className='icon-item padding-0'>
                        <img src={iconTick} alt='icon-item' />
                      </div>
                    </div>
                    <div className='col-10 padding-0'>
                      <div className='text-item'>Staking to earn NFTs.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-12 col-md-7'>
              <div className='img-utility-features'>
                <img src={utilityFeatures} alt='img-utility-features' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
