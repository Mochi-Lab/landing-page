import './style.css';
import Member from './Member';
import chien from 'assets/member/chien.png';
import cong from 'assets/member/cong.png';
import ha from 'assets/member/ha.png';
import hoang from 'assets/member/hoang.png';
import kien from 'assets/member/kien.png';
import nghia from 'assets/member/nghia.png';
import tan from 'assets/member/tan.png';
import andrew from 'assets/member/andrew.jpg';
// import daniel from 'assets/member/Daniel.png';

import matth from 'assets/advisors/matth.png';
import oliver from 'assets/advisors/oliver.png';
import hatu from 'assets/advisors/hatu.png';
import anirban from 'assets/advisors/anirban.jpg';
import lester from 'assets/advisors/lester.png';

export default function MochiTeam() {
  const advisors = [
    {
      image: matth,
      name: 'Matthijs van Driel',
      role: 'ADVISOR',
      linkedin: 'https://vn.linkedin.com/',
      twitter: 'https://vn.linkedin.com/',
      instagram: 'https://www.instagram.com/',
    },
    {
      image: oliver,
      name: 'Oliver Nguyen',
      role: 'ADVISOR',
      linkedin: 'https://www.linkedin.com/in/oliver-ngg-756128159/',
      twitter: 'https://twitter.com/Oliver_ngg',
      instagram: 'https://www.instagram.com/',
    },
    {
      image: hatu,
      name: 'Hassan (Hatu) Sheikh',
      role: 'ADVISOR',
      linkedin: 'https://www.linkedin.com/in/hassan-hatu-sheikh-182a94a8/',
      twitter: 'https://twitter.com/TheHatuSS',
      instagram: 'https://www.instagram.com/',
    },
    {
      image: anirban,
      name: 'Anirban Saha',
      role: 'PRODUCT ADVISOR',
      linkedin: 'https://vn.linkedin.com/',
      twitter: 'https://twitter.com/home',
      instagram: 'https://www.instagram.com/',
    },
    {
      image: lester,
      name: 'Lester Lim',
      role: 'ADVISOR',
      linkedin: 'https://www.linkedin.com/in/lesterlim15/',
      twitter: 'https://twitter.com/home',
      instagram: 'https://www.instagram.com/',
    },
  ];

  const members = [
    {
      image: ha,
      name: 'Sophia Ho',
      role: 'CO-FOUNDER & CEO',
      linkedin: 'https://www.linkedin.com/in/sophia-ha-ho/',
      twitter: 'https://twitter.com/SophiaHaHo',
      instagram: 'https://www.instagram.com/',
    },
    {
      image: kien,
      name: 'Kevin Do',
      role: 'CO-FOUNDER & CTO',
      linkedin: 'https://www.linkedin.com/in/dotrungkien',
      twitter: 'https://twitter.com/',
      instagram: 'https://www.instagram.com/',
    },
    {
      image: chien,
      name: 'Charles Tran',
      role: 'CO-FOUNDER & CPO',
      linkedin: 'https://www.linkedin.com/in/chien-tran-b52339159',
      twitter: 'https://twitter.com/',
      instagram: 'https://www.instagram.com/',
    },
    {
      image: hoang,
      name: 'Taio Newgate',
      role: 'CO-FOUNDER & DEV',
      linkedin: 'https://www.linkedin.com/in/taio-newgate-7027771b1/',
      twitter: 'https://twitter.com/SnowstormAnivia',
      instagram: 'https://www.instagram.com/',
    },
    {
      image: nghia,
      name: 'Nolan Ngo',
      role: 'CO-FOUNDER & DEV',
      linkedin: 'https://www.linkedin.com/in/ngo-nolan-b5b67720b/',
      twitter: 'https://twitter.com/nolanngo97',
      instagram: 'https://www.instagram.com/',
    },
    {
      image: tan,
      name: 'Elio Tan',
      role: 'CO-FOUNDER & DEV',
      linkedin: 'https://www.linkedin.com/in/elio-tan-b13b3a203/',
      twitter: 'https://twitter.com/TnTrnh5',
      instagram: 'https://www.instagram.com/',
    },
    {
      image: cong,
      name: 'Roberto Le',
      role: 'CO-FOUNDER & DEV',
      linkedin: 'https://www.linkedin.com/in/l%C3%AA-th%C3%A0nh-c%C3%B4ng-b937a1164/',
      twitter: 'https://twitter.com/lwconga7',
      instagram: 'https://www.instagram.com/',
    },
    {
      image: andrew,
      name: 'Andrew Fennell',
      role: 'COMMUNITY MANAGER \n & BDM',
      linkedin: 'https://twitter.com/Andrewfunbags',
      twitter: 'https://twitter.com/Andrewfunbags',
      instagram: 'https://www.instagram.com/',
    },
    // {
    //   image: daniel,
    //   name: 'Daniel Timothy',
    //   role: 'BUSINESS MANAGER',
    //   linkedin: 'https://vn.linkedin.com/',
    //   twitter: 'https://vn.linkedin.com/',
    //   instagram: 'https://www.instagram.com/',
    // },
  ];

  return (
    <div className='mochi-team center container'>
      {/* <div>
        <p className='smail-title'>OUR TEAM</p>
        <p className='big-title'>The Team</p>
        <div className='center'>
          <p className='description'>
            Auctor mi rutrum pellentesque suspendisse sed adipiscing netus etiam. Ornare amet sed ac
            scelerisque vel, egestas. Ultrices nam est, odio mattis.
          </p>
        </div>
      </div> */}
      <br />
      <div>
        <p className='big-title'>The Team</p>
        <br />
        <div className='image-area'>
          {members.map((member, index) => (
            <Member key={index} data={member} />
          ))}
        </div>
      </div>
      <br />
      <div>
        <p className='big-title'>Advisors</p>
        <br />
        <div className='image-area'>
          {advisors.map((advisor, index) => (
            <Member key={index} data={advisor} />
          ))}
        </div>
      </div>
    </div>
  );
}
