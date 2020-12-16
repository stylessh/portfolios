import React, { FC } from "react";

import { IProject } from "@Interfaces/Project";

type ProjectsType = {
  projects: IProject[];
};

const HomeProjects: FC<ProjectsType> = ({ projects }) => {
  const enterHover = (e) => e.target.classList.add("active");

  const leaveHover = (e) => e.target.classList.remove("active");

  return (
    <>
      <div id="projects"></div>
      <section className="projects">
        <div className="header">
          <h2 className="wow fadeInUp">Selected projects.</h2>
          <div className="line"></div>
        </div>

        {projects.map((project: IProject, i: number) => {
          return (
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="work"
              onMouseEnter={enterHover}
              onMouseLeave={leaveHover}
              key={project.id}
            >
              <div className="left">
                <p className="counter">{`0${i + 1} / 0${projects.length}`}</p>

                <h2
                  className="work_title"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  {project.name}
                </h2>
              </div>

              <div className="work_image">
                <img
                  className="wow fadeIn"
                  src={project.images[0].url}
                  alt={project.name}
                />
              </div>

              <p className="role" data-aos="fade-up" data-aos-delay="350">
                {project.role.map((r) => `${r}. `)}
              </p>
            </a>
          );
        })}
      </section>
    </>
  );
};

export default HomeProjects;
