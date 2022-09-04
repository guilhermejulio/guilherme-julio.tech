import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import { graphql, useStaticQuery } from 'gatsby';
import { useI18next } from 'gatsby-plugin-react-i18next';

const Header = () => {
  const { language } = useI18next();
  const data = useStaticQuery(graphql`
    query {
      hero: pessoaYaml {
        title
        name
        subtitle
        cta
      }
      heroEN: personYaml {
        title
        name
        subtitle
        cta
      }
      heroES: personaYaml {
        title
        name
        subtitle
        cta
      }
    }
  `);
  let getHero = data.hero;
  if (language === 'en') getHero = data.heroEN;
  else if (language === 'es') getHero = data.heroES;
  
  const hero = getHero;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="hero" className="jumbotron">
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <h1 className="hero-title">
            {hero?.title}{' '}
            <span className="text-color-main">{hero?.name}</span>
            <br />
            {hero?.subtitle}
          </h1>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <p className="hero-cta">
            <span className="cta-btn cta-btn--hero">
              <Link to="about" smooth duration={1000}>
                {hero?.cta}
              </Link>
            </span>
          </p>
        </Fade>
      </Container>
    </section>
  );
};

export default Header;
