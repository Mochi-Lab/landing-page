import './style.css';
import Partner from './Partner';
import cinchBlock from 'assets/partners/0.1cinchBlock.png';
import blockStar from 'assets/partners/0.2block-star.png';
import btxCapital from 'assets/partners/0.3btx-capital.png';
import existential from 'assets/partners/0.4existential.png';
import magnus from 'assets/partners/0.5magnus.png';
import raptor from 'assets/partners/0.6raptor.png';
import x21 from 'assets/partners/0.7x21.png';
import seedify from 'assets/partners/0.8seedify.png';
import blocksync from 'assets/partners/0.9blocksync.png';
import mercurius from 'assets/partners/0.10mercurius.png';

export default function Partners() {
  const members = [
    {
      image: cinchBlock,
      url: 'Courtney Henry',
    },
    {
      image: blockStar,
      url: 'Courtney Henry',
    },
    {
      image: btxCapital,
      url: 'Courtney Henry',
    },
    {
      image: existential,
      url: 'Courtney Henry',
    },
    {
      image: magnus,
      url: 'Courtney Henry',
    },
    {
      image: raptor,
      url: 'Courtney Henry',
    },
    {
      image: x21,
      url: 'Courtney Henry',
    },
    {
      image: seedify,
      url: 'Courtney Henry',
    },

    {
      image: blocksync,
      url: 'Courtney Henry',
    },
    {
      image: mercurius,
      url: 'Courtney Henry',
    },
  ];

  return (
    <div className='partners center container'>
      <div>
        <p className='big-title'>Investors And Partners</p>
      </div>
      <div>
        <p className='title-partner'></p>
        <div className='image-area row'>
          {members.map((member, index) => (
            <div className='col-12 col-md-6 col-lg-3 '>
              <Partner key={index} data={member} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
