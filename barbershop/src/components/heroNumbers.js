import React, { useRef, useEffect, useState } from 'react';
import '../styles/heroNumbers.css';
import CountUp from 'react-countup';

const HeroNumbers = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counted, setCounted] = useState({
    experience: false,
    founded: false,
    clients: false,
    awards: false
  });
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleCounted = (key) => {
    setCounted(prevState => ({
      ...prevState,
      [key]: true
    }));
  };

  return (
    <div ref={sectionRef} className='hero-numbers-page'>
      <div className='hero-numbers-container'>
        <div className='hero-numbers-sections'>
          <p className='hero-numbers-number'>
            {isVisible && !counted.experience && (
              <CountUp end={10} duration={5} onComplete={() => handleCounted('experience')} />
            )}
          </p>
          <p className='hero-numbers-text'>Years of experience</p>
        </div>
        <div className='hero-numbers-sections'>
          <p className='hero-numbers-number'>
            {isVisible && !counted.founded && (
              <CountUp end={2007} duration={4} onComplete={() => handleCounted('founded')} />
            )}
          </p>
          <p className='hero-numbers-text'>Founded</p>
        </div>
        <div className='hero-numbers-sections'>
          <p className='hero-numbers-number'>
            {isVisible && !counted.clients && (
              <CountUp end={10000} duration={4} onComplete={() => handleCounted('clients')} />
            )}
          </p>
          <p className='hero-numbers-text'>Happy clients</p>
        </div>
        <div className='hero-numbers-sections'>
          <p className='hero-numbers-number'>
            {isVisible && !counted.awards && (
              <CountUp end={26} duration={5} onComplete={() => handleCounted('awards')} />
            )}
          </p>
          <p className='hero-numbers-text'>Awards</p>
        </div>
      </div>
    </div>
  );
};

export default HeroNumbers;
