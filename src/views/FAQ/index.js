import { useEffect, useRef, useState } from 'react';
import NavbarMenu from 'components/NavbarMenu';
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
    window.addEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className='faq-page'>
      <div ref={top}>
        <NavbarMenu executeScroll={executeScroll} />
      </div>
      <div className='conten-faq'></div>
    </div>
  );
}
