import React, { useEffect, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
import { Trans, useI18next, useTranslation } from 'gatsby-plugin-react-i18next';
import Title from '../Title/Title';
import ProjectImg from '../Image/ProjectImg';

const Projects = () => {
  const { t } = useTranslation();
  const { language } = useI18next();

  const data = useStaticQuery(graphql`
    query {
      projetos: allProjetosYaml {
        nodes {
          id
          title
          info
          infoTwo
          url
          repo
          repoBtn
          img
        }
      }
      projects: allProjectsYaml {
        nodes {
          id
          title
          info
          infoTwo
          url
          repo
          repoBtn
          img
        }
      }
      proyectos: allProyectosYaml {
        nodes {
          id
          title
          info
          infoTwo
          url
          repo
          repoBtn
          img
        }
      }
    }
  `);

  let getProjects = data.projetos.nodes;
  if (language === 'en') getProjects = data.projects.nodes;
  else if (language === 'es') getProjects = data.proyectos.nodes;
  const projects = getProjects;

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
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Title title={t('Projetos que trabalhei')} />
          {projects.map((project) => {
            return (
              <Row key={project.id}>
                <Col lg={4} sm={12}>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={500}
                    distance="30px"
                  >
                    <div className="project-wrapper__text">
                      <h3 className="project-wrapper__text-title">{project?.title}</h3>
                      <div>
                        <p>{project?.info}</p>
                        <p className="mb-4">{project?.infoTwo}</p>
                      </div>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-btn cta-btn--hero"
                        href={project.url || '#!'}
                      >
                        <Trans>Veja ao vivo</Trans>
                      </a>

                      {project.repo && (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn text-color-main"
                          href={project.repo}
                        >
                          {project?.repoBtn}
                        </a>
                      )}
                    </div>
                  </Fade>
                </Col>
                <Col lg={8} sm={12}>
                  <Fade
                    right={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={1000}
                    distance="30px"
                  >
                    <div className="project-wrapper__image">
                      <a
                        href={project.url || '#!'}
                        target="_blank"
                        aria-label="Project Link"
                        rel="noopener noreferrer"
                      >
                        <Tilt
                          options={{
                            reverse: false,
                            max: 8,
                            perspective: 1000,
                            scale: 1,
                            speed: 300,
                            transition: true,
                            axis: null,
                            reset: true,
                            easing: 'cubic-bezier(.03,.98,.52,.99)',
                          }}
                        >
                          <div data-tilt className="thumbnail rounded">
                            <ProjectImg alt={project.title} filename={project.img} />
                          </div>
                        </Tilt>
                      </a>
                    </div>
                  </Fade>
                </Col>
              </Row>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
