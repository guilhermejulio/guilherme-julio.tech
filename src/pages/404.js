import React from 'react';
import { Link, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { Container } from 'react-bootstrap';
import { useI18next, useTranslation } from 'gatsby-plugin-react-i18next';
import Fade from 'react-reveal/Fade';
import 'bootstrap/dist/css/bootstrap.min.css';

import Global from '../constants/Global';
import '../style/main.scss';

export default () => {
  const { t } = useTranslation();
  const { language } = useI18next();
  let getHeadByLanguage = Global.getHeadData;
  if (language === 'en') {
    getHeadByLanguage = Global.getHeadDataEN;
  } else if (language === 'es') {
    getHeadByLanguage = Global.getHeadDataES;
  }
  const headData = getHeadByLanguage;
  const { lang } = headData;
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{t('Página não encontrada')}</title>
        <html lang={lang} />
        <meta name="description" content={t('Página não encontrada')} />
      </Helmet>
      <section id="hero" className="jumbotron">
        <Container>
          <Fade bottom duration={1000} delay={500} distance="30px">
            <h1 className="hero-title text-center">
              {t('Desculpe, esse caminho não existe')}{' '}
              <span role="img" aria-label="emoji">
                😞
              </span>
            </h1>
          </Fade>
          <Fade bottom duration={1000} delay={1000} distance="30px">
            <p className="hero-cta justify-content-center">
              <Link className="cta-btn cta-btn--hero" to="/">
                {t('Voltar')}
              </Link>
            </p>
          </Fade>
        </Container>
      </section>
    </>
  );
};

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          id
          ns
          data
          language
        }
      }
    }
  }
`;
