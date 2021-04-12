import './style.css';
import Partner from './Partner';
import cinchBlock from 'assets/partners/cinchblock.png';
import blockStar from 'assets/partners/blockstar.svg';
import btxCapital from 'assets/partners/btx-capital.png';
import existential from 'assets/partners/existential.png';
import magnus from 'assets/partners/magnus_capital.png';
import raptor from 'assets/partners/raptor.png';
import x21 from 'assets/partners/x21.png';
import seedify from 'assets/partners/seedify.png';
import blocksync from 'assets/partners/blocksync.svg';
import mercurius from 'assets/partners/mercurius.png';

export default function Partners() {
  const members = [
    {
      image: cinchBlock,
      url: 'https://www.cinchblock.com/',
      name: 'cinch block',
    },
    {
      image: blockStar,
      url: 'https://blockstar.vc/',
      name: 'block star',
    },
    {
      image: btxCapital,
      url: 'https://btx.capital/',
      name: 'btx capital',
    },
    {
      image: existential,
      url: 'https://exst.vc/',
      name: 'existential capital',
    },
    {
      image: magnus,
      url: 'https://magnusdigitalassets.com/',
      name: 'magnus capital',
    },
    {
      image: raptor,
      url: 'https://www.raptorcapital.io/',
      name: 'raptor capital',
    },
    {
      image: x21,
      url: 'https://x21digital.com/',
      name: 'x21 digital',
    },
    {
      image: seedify,
      url: 'https://seedify.fund/',
      name: 'seedify fund',
    },

    {
      image: blocksync,
      url: 'https://www.blocksync.com/',
      name: 'blocksync ventures',
    },
    {
      image: mercurius,
      url: 'Courtney Henry',
      name: 'mercurius',
    },
  ];

  return (
    <div className='partners center container'>
      <div>
        <p className='big-title'>Investors And Partners</p>
      </div>
      <div>
        <p className='title-partner'></p>
        <div className='image-area row justify-content-center'>
          {members.map((partner, index) => (
            <div className='col-6 col-md-4 col-lg-3'>
              <Partner key={index} data={partner} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
