import React from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import { graphql, useStaticQuery } from 'gatsby';
import { useTranslation, useI18next } from 'gatsby-plugin-react-i18next';
import Title from '../Title/Title';

const Contact = () => {
  const { t } = useTranslation();
  const { language } = useI18next();
  
  const data = useStaticQuery(graphql`
    query {
      contato: contatoYaml {
        cta
        btn
        email
      }
      contact: contactYaml {
        cta
        btn
        email
      }
      contacto: contactoYaml {
        cta
        btn
        email
      }
    }
  `);
  let getContact = data.contato;
  if (language === 'en') getContact = data.contact;
  else if (language === 'es') getContact = data.contacto;
  const contact = getContact;

  return (
    <section id="contact">
      <Container>
        <Title title={t('Contato')} />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">
              {contact?.cta}
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--resume"
              href={
                contact?.email ? `mailto:${contact.email}` : 'https://github.com/guilhermejulio'
              }
            >
              {contact?.btn}
            </a>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
