import React, { FC } from "react";

import styles from "@Styles/components/Projects.module.scss";

import { IProject } from "@Interfaces/Project";

type ProjectsType = {
  projects: IProject[];
};

const HomeProjects: FC<ProjectsType> = ({ projects }) => {
  return (
    <>
      <div id="projects"></div>
      <section className={styles.projects}>
        <div className={styles.header}>
          <h2 className="wow fadeInUp">Selected projects.</h2>
          <div className={`${styles.line} wow fadeInUp`}></div>
        </div>

        {projects.map((project: IProject, i: number) => {
          if (project.right) {
            return (
              <div
                className={`${styles.work} ${styles.grid_2} ${styles.right}`}
                key={project.id}
              >
                <div className={styles.info}>
                  <p className={`${styles.counter} wow fadeInUp`}>{`0${
                    i + 1
                  } / 0${projects.length}`}</p>
                  <h2 className={`${styles.project_name} wow fadeInUp`}>
                    {project.name}
                  </h2>

                  <p className={`${styles.role} wow fadeInUp`}>
                    <span>Role:</span>
                    {project.role.map((r) => `${r}. `)}
                  </p>

                  <p className={styles.technologies}>
                    <span>Technologies:</span>
                    {project.technologies.map((t) => `${t}. `)}
                  </p>

                  <a
                    href={project.url}
                    target="_blank"
                    className={styles.link_to}
                  >
                    Take a look!
                  </a>
                </div>

                <a
                  href="https://stylessh.github.io/portfolios"
                  target="_blank"
                  className={styles.work_image}
                >
                  <img
                    className="wow fadeIn"
                    src={project.images[0].url}
                    alt={project.name}
                  />
                </a>
              </div>
            );
          } else {
            return (
              <div
                className={`${styles.work} ${styles.grid_2} ${styles.left}`}
                key={project.id}
              >
                <a
                  href="https://stylessh.github.io/portfolios"
                  target="_blank"
                  className={styles.work_image}
                >
                  <img
                    className="wow fadeIn"
                    src={project.images[0].url}
                    alt={project.name}
                  />
                </a>

                <div className={styles.info}>
                  <p className={`${styles.counter} wow fadeInUp`}>{`0${
                    i + 1
                  } / 0${projects.length}`}</p>
                  <h2 className={`${styles.project_name} wow fadeInUp`}>
                    {project.name}
                  </h2>

                  <p className={`${styles.role} wow fadeInUp`}>
                    <span>Role:</span>
                    {project.role.map((r) => `${r}. `)}
                  </p>

                  <p className={styles.technologies}>
                    <span>Technologies:</span>
                    {project.technologies.map((t) => `${t}. `)}
                  </p>

                  <a
                    href={project.url}
                    target="_blank"
                    className={styles.link_to}
                  >
                    Take a look!
                  </a>
                </div>
              </div>
            );
          }
        })}
      </section>
    </>
  );
};

export default HomeProjects;
