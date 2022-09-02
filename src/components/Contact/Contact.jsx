import React from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import { graphql, useStaticQuery } from 'gatsby';
import Title from '../Title/Title';

const Contact = () => {
  const data = useStaticQuery(graphql`
    query {
      contact: contatoYaml {
        cta
        btn
        email
        title
      }
    }
  `);
  const { contact } = data;

  return (
    <section id="contact">
      <Container>
        <Title title={contact?.title} />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">
              {contact?.cta || 'Would you like to work with me? Awesome!'}
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"
              href={
                contact?.email ? `mailto:${contact.email}` : 'https://github.com/guilhermejulio'
              }
            >
              {contact?.btn || "Let's Talk"}
            </a>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
