import './style.css';
import Partner from './Partner';
import cinhblock from 'assets/partners/0.1cinhblock.png';
import blockStar from 'assets/partners/0.2block-star.png';
import btxCapital from 'assets/partners/0.3btx-capital.png';
import existential from 'assets/partners/0.4existential.png';
import magnus from 'assets/partners/0.5magnus.png';
import raptor from 'assets/partners/0.6raptor.png';
import x21 from 'assets/partners/0.7x21.png';
import seedify from 'assets/partners/0.8seedify.png';

export default function Partners() {
  const members = [
    {
      image: cinhblock,
      name: 'Courtney Henry',
      role: 'Founder Innovion',
      linkedin: 'https://vn.linkedin.com/',
      twitter: 'https://vn.linkedin.com/',
      instagram: 'https://vn.linkedin.com/',
    },
    {
      image: blockStar,
      name: 'Courtney Henry',
      role: 'Founder Innovion',
      linkedin: 'https://vn.linkedin.com/',
      twitter: 'https://vn.linkedin.com/',
      instagram: 'https://vn.linkedin.com/',
    },
    {
      image: btxCapital,
      name: 'Courtney Henry',
      role: 'Founder Innovion',
      linkedin: 'https://vn.linkedin.com/',
      twitter: 'https://vn.linkedin.com/',
      instagram: 'https://vn.linkedin.com/',
    },
    {
      image: existential,
      name: 'Courtney Henry',
      role: 'Founder Innovion',
      linkedin: 'https://vn.linkedin.com/',
      twitter: 'https://vn.linkedin.com/',
      instagram: 'https://vn.linkedin.com/',
    },
    {
      image: magnus,
      name: 'Courtney Henry',
      role: 'Founder Innovion',
      linkedin: 'https://vn.linkedin.com/',
      twitter: 'https://vn.linkedin.com/',
      instagram: 'https://vn.linkedin.com/',
    },
    {
      image: raptor,
      name: 'Courtney Henry',
      role: 'Founder Innovion',
      linkedin: 'https://vn.linkedin.com/',
      twitter: 'https://vn.linkedin.com/',
      instagram: 'https://vn.linkedin.com/',
    },
    {
      image: x21,
      name: 'Courtney Henry',
      role: 'Founder Innovion',
      linkedin: 'https://vn.linkedin.com/',
      twitter: 'https://vn.linkedin.com/',
      instagram: 'https://vn.linkedin.com/',
    },
    {
      image: seedify,
      name: 'Courtney Henry',
      role: 'Founder Innovion',
      linkedin: 'https://vn.linkedin.com/',
      twitter: 'https://vn.linkedin.com/',
      instagram: 'https://vn.linkedin.com/',
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
