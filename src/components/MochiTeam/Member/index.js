import iconLinkedin from 'assets/icons/linkedin.svg';
import iconTwitter from 'assets/icons/twitter.svg';
import iconInstagram from 'assets/icons/instagram.svg';

export default function Member({ data }) {
  const { image, name, role, linkedin, twitter, instagram } = data;
  return (
    <div className='member-card'>
      <img src={image} alt={name + role} />
      <p className='name'>{name}</p>
      <p className='role'>{role}</p>
      <div className='footer-card'>
        <div>
          <img src={iconLinkedin} alt='linkedin' onClick={() => window.open(linkedin)} />
        </div>
        <div>
          <img src={iconTwitter} alt='twitter' onClick={() => window.open(twitter)} />
        </div>
        <div>
          <img src={iconInstagram} alt='instagram' onClick={() => window.open(instagram)} />
        </div>
      </div>
    </div>
  );
}
