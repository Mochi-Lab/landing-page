import './style.css';
import Member from './Member';
import chien from 'assets/member/chien.png';
import cong from 'assets/member/cong.png';
import ha from 'assets/member/ha.png';
import hoang from 'assets/member/hoang.png';
import kien from 'assets/member/kien.png';
import nghia from 'assets/member/nghia.png';
import tan from 'assets/member/tan.png';
import andrew from 'assets/member/andrew.png';
import daniel from 'assets/member/Daniel.png';

import anirban from 'assets/advisors/anirban.png';
import lester from 'assets/advisors/lester.png';
import matth from 'assets/advisors/matth.png';
import oliver from 'assets/advisors/oliver.png';

export default function MochiTeam() {
  const advisors = [
    {
      image: matth,
      name: 'Matthijs van Driel',
      role: 'ADVISOR',
      linkedin: 'https://vn.linkedin.com/',
      twitter: 'https://vn.linkedin.com/',
      instagram: 'https://vn.linkedin.com/',
    },
    {
      image: oliver,
      name: 'Oliver Nguyen',
      role: 'ADVISOR',
      linkedin: 'https://vn.linkedin.com/',
      twitter: 'https://vn.linkedin.com/',
      instagram: 'https://vn.linkedin.com/',
    },
    {
      image: anirban,
      name: 'Anirban Saha',
      role: 'PRODUCT ADVISOR',
      linkedin: 'https://vn.linkedin.com/',
      twitter: 'https://vn.linkedin.com/',
      instagram: 'https://vn.linkedin.com/',
    },
    {
      image: lester,
      name: 'Lester Lim',
      role: 'ADVISOR',
      linkedin: 'https://vn.linkedin.com/',
      twitter: 'https://vn.linkedin.com/',
      instagram: 'https://vn.linkedin.com/',
    },
  ];

  const members = [
    {
      image: ha,
      name: 'Sophia Ho',
      role: 'CO-FOUNDER & CEO',
      linkedin: 'https://vn.linkedin.com/',
      twitter: 'https://vn.linkedin.com/',
      instagram: 'https://vn.linkedin.com/',
    },
    {
      image: kien,
      name: 'Kevin Do',
      role: 'CO-FOUNDER & CTO',
      linkedin: 'https://vn.linkedin.com/',
      twitter: 'https://vn.linkedin.com/',
      instagram: 'https://vn.linkedin.com/',
    },
    {
      image: chien,
      name: 'Charles Tran',
      role: 'CO-FOUNDER & CPO',
      linkedin: 'https://vn.linkedin.com/',
      twitter: 'https://vn.linkedin.com/',
      instagram: 'https://vn.linkedin.com/',
    },
    {
      image: hoang,
      name: 'Taio Newgate',
      role: 'CO-FOUNDER & DEV',
      linkedin: 'https://vn.linkedin.com/',
      twitter: 'https://vn.linkedin.com/',
      instagram: 'https://vn.linkedin.com/',
    },
    {
      image: nghia,
      name: 'Nolan Ngo',
      role: 'CO-FOUNDER & DEV',
      linkedin: 'https://vn.linkedin.com/',
      twitter: 'https://vn.linkedin.com/',
      instagram: 'https://vn.linkedin.com/',
    },
    {
      image: tan,
      name: 'Elio Tan',
      role: 'CO-FOUNDER & DEV',
      linkedin: 'https://vn.linkedin.com/',
      twitter: 'https://vn.linkedin.com/',
      instagram: 'https://vn.linkedin.com/',
    },
    {
      image: cong,
      name: 'Roberto Le',
      role: 'CO-FOUNDER & DEV',
      linkedin: 'https://vn.linkedin.com/',
      twitter: 'https://vn.linkedin.com/',
      instagram: 'https://vn.linkedin.com/',
    },
    {
      image: andrew,
      name: 'Andrew Fennell',
      role: 'COMMUNITY MANAGER \n & BDM',
      linkedin: 'https://vn.linkedin.com/',
      twitter: 'https://vn.linkedin.com/',
      instagram: 'https://vn.linkedin.com/',
    },
    {
      image: daniel,
      name: 'Daniel Timothy',
      role: 'BUSINESS MANAGER',
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
