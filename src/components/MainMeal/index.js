import './style.css';
import iconHandBag from 'assets/icons/iconHandBag.png';
import iconDex from 'assets/icons/iconDex.png';
import iconRewardSystem from 'assets/icons/iconRewardSystem.png';
import iconEarn from 'assets/icons/iconEarn.png';
import iconIntegration from 'assets/icons/iconIntegration.png';

export default function MainMeal() {
  return (
    <div className='main-meal'>
      <div className='container'>
        <div className='title-section'>
          <h1>The Main meal</h1>
          <div className='description-section'>
            Interdum et mollis ut viverra bibendum. Nibh velit euismod erat amet eget bibendum
            vitae. Est morbi sit consectetur et quis nam est enim.
          </div>
        </div>
        <div className='list-item'>
          <div className='row justify-content-center'>
            <div className='col-12 col-md-4 mb-4'>
              <div className='item'>
                <div className='icon-item'>
                  <img src={iconHandBag} alt='icon-item' />
                </div>
                <div className='title-item'>Mochi Marketplace</div>
                <div className='description-item'>
                  Where people can buy, sell, exchange peer-to-peer, lending, and borrow
                  peer-to-peer through an exchange like a traditional exchange.
                </div>
              </div>
            </div>
            <div className='col-12 col-md-4 mb-4'>
              <div className='item'>
                <div className='icon-item'>
                  <img src={iconDex} alt='icon-item' />
                </div>
                <div className='title-item'>Mochi DEX</div>
                <div className='description-item'>
                  Where users can use automated market making (“AMM”) mechanisms to exchange between
                  FTs and NFTs on the same or cross-chains.
                </div>
              </div>
            </div>
            <div className='col-12 col-md-4 mb-4'>
              <div className='item'>
                <div className='icon-item'>
                  <img src={iconRewardSystem} alt='icon-item' />
                </div>
                <div className='title-item'>Mochi Rewards System</div>
                <div className='description-item'>
                  To increase user interaction in the Mochi Market ecosystem, there will be a lot of
                  reward systems for users such as trading reward, referral, airdrop, lottery, NFT
                  launchpad.
                </div>
              </div>
            </div>
            <div className='col-12 col-md-4 mb-4'>
              <div className='item'>
                <div className='icon-item'>
                  <img src={iconEarn} alt='icon-item' />
                </div>
                <div className='title-item'>Mochi Earn</div>
                <div className='description-item'>
                  Providing Staking, Yield Farming programs so that users can earn passive profits
                  by providing NFT and FT liquidity for the services of the Mochi Market ecosystem.
                </div>
              </div>
            </div>
            <div className='col-12 col-md-4 mb-4'>
              <div className='item'>
                <div className='icon-item'>
                  <img src={iconIntegration} alt='icon-item' />
                </div>
                <div className='title-item'>Mochi Integration</div>
                <div className='description-item'>
                  The system is designed as plugable as possible, for upgrades as well as providing
                  a way to directly integrate with popular NFT Marketplaces such as OpenSea or
                  Rarible.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
