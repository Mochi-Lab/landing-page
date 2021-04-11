import './style.css';
import Illustration from 'assets/images/Illustration.png';

export default function MochiToken() {
  return (
    <div className='mochi-token'>
      <div className='container'>
        <div className='title-section'>
          <h1>The $MOMA Token</h1>
          {/* <div className='description-section'>
            Auctor mi rutrum pellentesque suspendisse sed adipiscing netus etiam. Ornare amet sed ac
            scelerisque vel, egestas. Ultrices nam est, odio mattis.
          </div> */}
        </div>
        <div className='content-mochi-team'>
          <div className='row'>
            <div className='col-12 col-md-6'>
              <div className='img-mochi-team'>
                <img src={Illustration} alt='img-mochi-team' />
              </div>
            </div>
            <div className='col-12 col-md-6'>
              <div className='description-mochi-team'>
                <div className='title-mochi-team'>
                  <h1>Governance and community involvement</h1>
                </div>
                <div className='text-mochi-team'>
                  The $MOMA governance token was designed to incentivize ecosystem participants to
                  contribute to developing the Mochi Ecosystem. $MOMA token holders will be able to
                  vote for the governance decisions of MochiLab, such as the selection of the
                  suitable platforms for cross-chain tokens, game development SDKs to be integrated
                  into the Mochi ecosystem, or having a say in the roadmap of Mochi.Market.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
