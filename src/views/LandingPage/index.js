import { useEffect } from 'react';
import Navbar from 'components/Navbar';
import Introductions from 'components/Introductions';
import Community from 'components/Community';
import TheProblems from 'components/TheProblems';
import WeBringTo from 'components/WeBringTo';
import MainMeal from 'components/MainMeal';
import MochiToken from 'components/MochiToken';
import UtilityFeatures from 'components/UtilityFeatures';
import Roadmap from 'components/Roadmap';
import MochiTeam from 'components/MochiTeam';
import Footer from 'components/Footer';
import canvasDotAmination from 'utils/canvasBackground';
import './style.css';

export default function LandingPage() {
  useEffect(() => {
    canvasDotAmination(document);
  });
  return (
    <>
      <div className='landing-page' id='landing-page'>
        <canvas id='bg-landing-page' className='bg-landing-page'></canvas>
        <div className='oval-top'></div>
        <Navbar />
        <Introductions />
        <Community />
        <TheProblems />
        <WeBringTo />
        <MainMeal />
        <MochiToken />
        <UtilityFeatures />
        <Roadmap />
        <MochiTeam />
        <Footer />
      </div>
    </>
  );
}
