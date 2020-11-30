import React, { FC } from "react";
import { motion } from "framer-motion";

import styles from "@Styles/components/Projects.module.scss";

import { IProject } from "@Interfaces/Project";

type ProjectsType = {
  projects: IProject[];
};

const transition = { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] };

const HomeProjects: FC<ProjectsType> = ({ projects }) => {
  return (
    <>
      <div id="projects"></div>
      <section className={styles.projects}>
        <div className={styles.header}>
          <h2 className="wow fadeInUp">Selected projects.</h2>
          <div className={styles.line}></div>
        </div>

        {projects.map((project: IProject, i: number) => {
          if (project.right) {
            return (
              <div
                className={`${styles.work} ${styles.grid_2} ${styles.right}`}
                key={project.id}
              >
                <div className={styles.info}>
                  <p className={`${styles.counter}`}>{`0${i + 1} / 0${
                    projects.length
                  }`}</p>

                  <h2
                    className={`${styles.project_name} `}
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    {project.name}
                  </h2>

                  <p
                    className={`${styles.role}`}
                    data-aos="fade-up"
                    data-aos-delay="350"
                  >
                    <span>Role:</span>
                    {project.role.map((r) => `${r}. `)}
                  </p>

                  <p
                    className={styles.technologies}
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    <span>Technologies:</span>
                    {project.technologies.map((t) => `${t}. `)}
                  </p>
                </div>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.work_image}
                >
                  <motion.img
                    initial={{ filter: "grayscale(1)" }}
                    whileHover={{
                      scale: 1.02,
                      filter: "grayscale(0)",
                    }}
                    transition={{
                      ...transition,
                      duration: 0.3,
                    }}
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
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.work_image}
                >
                  <motion.img
                    initial={{ filter: "grayscale(1)" }}
                    whileHover={{
                      scale: 1.02,
                      filter: "grayscale(0)",
                    }}
                    transition={{
                      ...transition,
                      duration: 0.3,
                    }}
                    className="wow fadeIn"
                    src={project.images[0].url}
                    alt={project.name}
                  />
                </a>

                <div className={styles.info}>
                  <p className={`${styles.counter} wow fadeInUp`}>{`0${
                    i + 1
                  } / 0${projects.length}`}</p>

                  <h2
                    className={`${styles.project_name} wow fadeInUp`}
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    {project.name}
                  </h2>

                  <p
                    className={`${styles.role} wow fadeInUp`}
                    data-aos="fade-up"
                    data-aos-delay="350"
                  >
                    <span>Role:</span>
                    {project.role.map((r) => `${r}. `)}
                  </p>

                  <p
                    className={styles.technologies}
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    <span>Technologies:</span>
                    {project.technologies.map((t) => `${t}. `)}
                  </p>
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
