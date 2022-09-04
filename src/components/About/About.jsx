import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import { graphql, useStaticQuery } from 'gatsby';
import { useTranslation, useI18next } from 'gatsby-plugin-react-i18next';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';

const About = () => {
  const { t } = useTranslation();
  const { language } = useI18next();

  const data = useStaticQuery(graphql`
    query {
      sobre: sobreYaml {
        img
        paragraphOne
        paragraphTwo
        paragraphThree
        resume
      }
      about: aboutYaml {
        img
        paragraphOne
        paragraphTwo
        paragraphThree
        resume
      }
      acerca: acercaYaml {
        img
        paragraphOne
        paragraphTwo
        paragraphThree
        resume
      }
    }
  `);
  let getAbout = data.sobre;
  if (language === 'en') getAbout = data.about;
  else if (language === 'es') getAbout = data.acerca;
  const about = getAbout;

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
    <section id="about">
      <Container>
        <Title title={t('Sobre mim')} />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile" filename={about?.img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {about?.paragraphOne}
                </p>
                <p className="about-wrapper__info-text">
                  {about?.paragraphTwo}
                </p>
                <p className="about-wrapper__info-text">
                  {about?.paragraphThree}
                </p>
                {about?.resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={about?.resume}
                    >
                      LinkedIn
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
