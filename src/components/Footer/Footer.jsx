import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import { graphql, useStaticQuery } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const data = useStaticQuery(graphql`
    query {
      networks: allSocialYaml {
        nodes {
          id
          name
          url
        }
      }
    }
  `);
  const networks = data.networks.nodes;

  return (
    <footer className="footer navbar-static-bottom">
      <Container>
        <span className="back-to-top">
          <Link to="hero" smooth duration={1000}>
            <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
          </Link>
        </span>
        <div className="social-links">
          {networks &&
            networks.map((network) => {
              const { id, name, url } = network;
              return (
                <a
                  key={id}
                  href={url || '#!'}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label={name}
                >
                  <i className={`fa fa-${name || 'refresh'} fa-inverse`} />
                </a>
              );
            })}
        </div>
        <p className="footer__text">
          © {new Date().getFullYear()} | {t('Feito com')} 💜 {t('por')}{' '}
          <a href="https://www.github.com/guilhermejulio">Guilherme Julio</a>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
