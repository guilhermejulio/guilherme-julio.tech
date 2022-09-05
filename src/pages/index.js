import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import { useI18next } from 'gatsby-plugin-react-i18next';
import App from '../components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';
import Global from '../constants/Global';

const IndexPage = () => {
  const { language } = useI18next();
  let getHeadByLanguage = Global.getHeadData;
  if (language === 'en') {
    getHeadByLanguage = Global.getHeadDataEN;
  } else if (language === 'es') {
    getHeadByLanguage = Global.getHeadDataES;
  }
  const headData = getHeadByLanguage;

  const { title, lang, description } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <html lang={lang} />
        <meta name="description" content={description} />
      </Helmet>
      <App />
    </>
  );
};

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;

export default IndexPage;
