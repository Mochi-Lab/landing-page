import './style.css';
import IconDotYellow from 'assets/icons/IconDotYellow.png';
import Union from 'assets/images/Union.png';

export default function WeBringTo() {
  return (
    <div className='we-bring-to'>
      <img src={Union} className='img-bg' alt='img-bg' />
      <div className='container'>
        <div className='title-section'>
          <h1>What we bring to the table</h1>
          <div className='description-section'>
            Mochi.Market is the first product of Mochilab.org - a team dedicated to developing
            practical and innovative technological solutions to enable a seamless web3 NFT economy.
          </div>
        </div>
        <div className='list-bring'>
          <div className='description-list'>
            An economy where NFT want-to-owns do not feel being left out - Everyone can buy it
          </div>
          <div className='box-list-item'>
            <div className='row'>
              <div className='col-12 col-md-4'>
                <div className='item-we-bring-to'>
                  <div className='icon-item'>
                    <img src={IconDotYellow} alt='Icon Dot Yellow' />
                  </div>
                  <div className='title-item'>
                    <b>01.</b> Fractionalization
                  </div>
                  <div className='description-item'>
                    Eu, mauris eu fusce tincidunt dignissim faucibus.
                  </div>
                </div>
              </div>
              <div className='col-12 col-md-4'>
                <div className='item-we-bring-to'>
                  <div className='icon-item'>
                    <img src={IconDotYellow} alt='Icon Dot Yellow' />
                  </div>
                  <div className='title-item'>
                    <b>02.</b> Low transaction fee
                  </div>
                  <div className='description-item'>
                    Diam, gravida dignissim lectus penatibus nam dui iaculis.
                  </div>
                </div>
              </div>
              <div className='col-12 col-md-4'>
                <div className='item-we-bring-to'>
                  <div className='icon-item'>
                    <img src={IconDotYellow} alt='Icon Dot Yellow' />
                  </div>
                  <div className='title-item'>
                    <b>03.</b> DEX
                  </div>
                  <div className='description-item'>
                    Hendrerit est cras consequat ornare sed ac a, massa est.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='list-bring'>
          <div className='description-list'>
            An economy where NFT holders do not feel being left out for holding NFT - Holding
            incentives
          </div>
          <div className='box-list-item'>
            <div className='row'>
              <div className='col-12 col-md-4'>
                <div className='item-we-bring-to'>
                  <div className='icon-item'>
                    <img src={IconDotYellow} alt='Icon Dot Yellow' />
                  </div>
                  <div className='title-item'>
                    <b>01.</b> Staking
                  </div>
                  <div className='description-item'>
                    Eu, mauris eu fusce tincidunt dignissim faucibus.
                  </div>
                </div>
              </div>
              <div className='col-12 col-md-4'>
                <div className='item-we-bring-to'>
                  <div className='icon-item'>
                    <img src={IconDotYellow} alt='Icon Dot Yellow' />
                  </div>
                  <div className='title-item'>
                    <b>02.</b> Lending
                  </div>
                  <div className='description-item'>
                    Diam, gravida dignissim lectus penatibus nam dui iaculis.
                  </div>
                </div>
              </div>
              <div className='col-12 col-md-4'>
                <div className='item-we-bring-to'>
                  <div className='icon-item'>
                    <img src={IconDotYellow} alt='Icon Dot Yellow' />
                  </div>
                  <div className='title-item'>
                    <b>03.</b> Interoperability
                  </div>
                  <div className='description-item'>
                    Hendrerit est cras consequat ornare sed ac a, massa est.
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
