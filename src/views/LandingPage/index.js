import { useEffect, useRef, useState } from 'react';
import NavbarMenu from 'components/NavbarMenu';
import Introductions from 'components/Introductions';
import Community from 'components/Community';
import TheProblems from 'components/TheProblems';
import WeBringTo from 'components/WeBringTo';
import MainMeal from 'components/MainMeal';
import MochiToken from 'components/MochiToken';
import UtilityFeatures from 'components/UtilityFeatures';
import Roadmap from 'components/Roadmap';
import MochiTeam from 'components/MochiTeam';
import Partners from 'components/Partners';
import Footer from 'components/Footer';
import canvasDotAmination from 'utils/canvasBackground';
import { VerticalAlignTopOutlined } from '@ant-design/icons';
import './style.css';

export default function LandingPage() {
  const sections = useRef([]);

  const [showScrollTop, setShowScrollTop] = useState(false);

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

  const executeScroll = (strSection) => {
    if (!strSection) return;
    sections.current[strSection].scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
      <div className='landing-page' id='landing-page'>
        <canvas id='bg-landing-page' className='bg-landing-page'></canvas>
        <div className='oval-top'></div>
        <div ref={(el) => (sections.current['Top'] = el)}>
          <NavbarMenu executeScroll={executeScroll} sections={sections} />
        </div>
        <Introductions />
        <Community />
        <TheProblems />
        <div ref={(el) => (sections.current['Solutions'] = el)}>
          <WeBringTo />
        </div>
        <div ref={(el) => (sections.current['Features'] = el)}>
          <MainMeal />
        </div>
        <div ref={(el) => (sections.current['Token'] = el)}>
          <MochiToken />
        </div>
        <UtilityFeatures />
        <div ref={(el) => (sections.current['Roadmap'] = el)}>
          <Roadmap />
        </div>
        <div ref={(el) => (sections.current['Team'] = el)}>
          <MochiTeam />
        </div>
        <div>
          <Partners />
        </div>
        <Footer />
        <div
          className={`btn-back-top ${showScrollTop ? 'is-visible' : ''}`}
          onClick={() => executeScroll('Top')}
        >
          <div className='btn-back-top-content'>
            <VerticalAlignTopOutlined />
          </div>
        </div>
      </div>
    </>
  );
}
