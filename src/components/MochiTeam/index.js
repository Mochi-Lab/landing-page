import './style.css';
import Member from './Member';
import chien from 'assets/member/chien.png';
import cong from 'assets/member/cong.png';
import ha from 'assets/member/ha.png';
import hoang from 'assets/member/hoang.png';
import kien from 'assets/member/kien.png';
import nghia from 'assets/member/nghia.png';
import tan from 'assets/member/tan.png';

export default function MochiTeam() {
  const advisors = [
    {
      image: chien,
      name: 'Courtney Henry',
      role: 'Founder Innovion',
      linkedin: 'https://vn.linkedin.com/',
      twitter: 'https://vn.linkedin.com/',
      instagram: 'https://vn.linkedin.com/',
    },
    {
      image: cong,
      name: 'Courtney Henry',
      role: 'Founder Innovion',
      linkedin: 'https://vn.linkedin.com/',
      twitter: 'https://vn.linkedin.com/',
      instagram: 'https://vn.linkedin.com/',
    },
    {
      image: ha,
      name: 'Courtney Henry',
      role: 'Founder Innovion',
      linkedin: 'https://vn.linkedin.com/',
      twitter: 'https://vn.linkedin.com/',
      instagram: 'https://vn.linkedin.com/',
    },
  ];

  const members = [
    {
      image: kien,
      name: 'Courtney Henry',
      role: 'Founder Innovion',
      linkedin: 'https://vn.linkedin.com/',
      twitter: 'https://vn.linkedin.com/',
      instagram: 'https://vn.linkedin.com/',
    },
    {
      image: ha,
      name: 'Courtney Henry',
      role: 'Founder Innovion',
      linkedin: 'https://vn.linkedin.com/',
      twitter: 'https://vn.linkedin.com/',
      instagram: 'https://vn.linkedin.com/',
    },
    {
      image: chien,
      name: 'Courtney Henry',
      role: 'Founder Innovion',
      linkedin: 'https://vn.linkedin.com/',
      twitter: 'https://vn.linkedin.com/',
      instagram: 'https://vn.linkedin.com/',
    },
    {
      image: hoang,
      name: 'Courtney Henry',
      role: 'Founder Innovion',
      linkedin: 'https://vn.linkedin.com/',
      twitter: 'https://vn.linkedin.com/',
      instagram: 'https://vn.linkedin.com/',
    },
    {
      image: nghia,
      name: 'Courtney Henry',
      role: 'Founder Innovion',
      linkedin: 'https://vn.linkedin.com/',
      twitter: 'https://vn.linkedin.com/',
      instagram: 'https://vn.linkedin.com/',
    },
    {
      image: tan,
      name: 'Courtney Henry',
      role: 'Founder Innovion',
      linkedin: 'https://vn.linkedin.com/',
      twitter: 'https://vn.linkedin.com/',
      instagram: 'https://vn.linkedin.com/',
    },
    {
      image: cong,
      name: 'Courtney Henry',
      role: 'Founder Innovion',
      linkedin: 'https://vn.linkedin.com/',
      twitter: 'https://vn.linkedin.com/',
      instagram: 'https://vn.linkedin.com/',
    },
  ];

  return (
    <div className='mochi-team center container'>
      <div>
        <p className='smail-title'>OUR TEAM</p>
        <p className='big-title'>The Mochi Team</p>
        <div className='center'>
          <p className='description'>
            Auctor mi rutrum pellentesque suspendisse sed adipiscing netus etiam. Ornare amet sed ac
            scelerisque vel, egestas. Ultrices nam est, odio mattis.
          </p>
        </div>
      </div>
      <div>
        <p className='title-member'>Mochi's Advisors</p>
        <div className='image-area'>
          {advisors.map((advisor, index) => (
            <Member key={index} data={advisor} />
          ))}
        </div>
      </div>
      <div>
        <p className='title-member'>Mochi's Member</p>
        <div className='image-area'>
          {members.map((member, index) => (
            <Member key={index} data={member} />
          ))}
        </div>
      </div>
    </div>
  );
}
