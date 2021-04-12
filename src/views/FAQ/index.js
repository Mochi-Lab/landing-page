import { useEffect, useRef, useState } from 'react';
import NavbarMenu from 'components/NavbarMenu';
import canvasDotAmination from 'utils/canvasBackground';
import './style.css';

export default function FAQ() {
  const top = useRef();
  const [showScrollTop, setShowScrollTop] = useState(false);

  const executeScroll = (strSection) => {
    if (!strSection) return;
    top.current.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setShowScrollTop(true);
    } else {
      setShowScrollTop(false);
    }
  };

  useEffect(() => {
    canvasDotAmination(document);
    window.addEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className='faq-page'>
      <canvas id='bg-landing-page' className='bg-landing-page'></canvas>
      <div className='oval-top'></div>
      <div ref={top}>
        <NavbarMenu executeScroll={executeScroll} />
      </div>
      <div className='conten-faq'>
        <div className='container'>
          <h2>What is MochiLab and Mochi Market?</h2>
          <p>
            Mochi.Market is the first product of Mochilab.org - a team dedicated to developing
            practical and innovative technological solutions to enable a seamless web3 NFT economy.
            For more information on Mochilab.org, please visit{' '}
            <a href='https://mochilab.org/' target='_blank' rel='noreferrer'>
              https://mochilab.org/
            </a>
            .
          </p>
          <h2>What is the aim of Mochi Market?</h2>
          <p>
            Mochi.Market envisions to be the multi-chain decentralized exchange ecosystem for
            non-fungible tokens (“NFT”). For more information on how we plan to achieve this aim,
            please visit our{' '}
            <a href='https://mochi.market/WhitePaper.pdf' target='_blank' rel='noreferrer'>
              https://mochi.market/WhitePaper.pdf
            </a>
            .
          </p>
          <h2>Does Mochi have its own token? /What is the name of the Mochi token?</h2>
          <p>
            <b>$MOMA</b>, an ERC20 and BEP20 token
          </p>
          <h2>What is the total supply of $MOMA tokens?</h2>
          <p>100,000,000 $MOMA tokens</p>

          <h2>What is the initial circulating token supply of $MOMA tokens?</h2>
          <p>8,648,933 $MOMA tokens</p>

          <h2>What is the price of $MOMA tokens?</h2>
          <p>Our initial listing will be priced at $0.1</p>

          <h2>What is the initial market cap?</h2>
          <p>$864,893 (including liquidity)</p>

          <h2>What does it offer to the users? / Product Suites</h2>
          <p>
            Mochi Marketplace - Where people can buy, sell, exchange peer-to-peer, lending, and
            borrow peer-to-peer through an exchange like a traditional exchange.
            <br />
            <br />
            Mochi DEX - Whereusers can use automated market making (“AMM”) mechanisms to exchange
            between FTs and NFTs on the same or cross-chains.
            <br />
            <br />
            Mochi Rewards System - To increase user interaction in the Mochi Market ecosystem, there
            will be a lot of reward systems for users such as trading reward, referral, airdrop,
            lottery, and NFT launchpad.
            <br />
            <br />
            Mochi Earn - Providing Staking, Yield Farming programs so that users can earn passive
            profits by providing NFT and FT liquidity for the services of the Mochi Market
            ecosystem.
            <br />
            <br />
            Mochi Integration - Provides a way to directly integrate with popular NFT platforms such
            as OpenSea or Rarible.
          </p>
          <h2>Which blockchains are currently supported?</h2>
          <p>
            The Mochi.Market will be launched initially on Binance Smart Chain (“BSC”), followed by
            other chains such as Harmony, Solana, Ethereum, Polkadot, Cosmos, Near, and popular
            Layer 2 protocols.
          </p>
          <h2> Where is Mochi based?</h2>
          <p>
            The team behind Mochi is spread out internationally while the entity is based in
            Singapore.
          </p>
          <h2>
            Will the Mochi.Market be able to interact with more blockchains besides Binance Smart
            Chain?
          </h2>
          <p>
            We develop Mochi.Market with the cross-chain vision in mind from the beginning of our
            product development so that users can freely buy, sell, and exchange NFTs as well as use
            other services between multiple chains easily and transparently.
            <br />
            <br />
            We will launch our product first on BSC in order to take advantage of its active and
            growing ecosystems, as well as the low transaction fees and fast transaction time on
            BSC. In the near future, our product will be deployed on Harmony, and other chains such
            Ethereum, Cosmos, Polkadot, Solana, Near Protocol and other blockchains, allowing users
            to tap into various blockchain ecosystems.
          </p>
          <h2>What is the Mochi.Market Airdrop Service?</h2>
          <p>
            As we are warming up to opening our doors, we would like to reward and encourage early
            testers and adopters for giving our service a try. This will help us to gather feedback
            and improve. An NFT will be considered similar to a lottery ticket. Everyone who holds
            an NFT will be able to take part in the airdrop campaign. Only NFT holders will be able
            to claim the airdrop. For more info on the first Mochi.Market Airdrop Service{' '}
            <a
              href='https://mochi-market.medium.com/mochi-market-airdrop-service-81ff03bb3454'
              target='_blank'
              rel='noreferrer'
            >
              Mochi.market Airdrop Service
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
