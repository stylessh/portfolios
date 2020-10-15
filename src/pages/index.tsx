import React, { FC } from "react";

import Hero from "@Components/Home/Hero";
import About from "@Components/Home/About";
import Projects from "@Components/Home/Projects";
import Contact from "@Components/Home/Contact";

import Footer from "@Components/Footer";

import Head from "@Components/Head";
import Layout from "@Components/Layout";

import { getProjects } from "@Api/projects";
import { IProject } from "@Interfaces/Project";

type HomeProps = {
  projects: IProject[];
};

const Home: FC<HomeProps> = ({ projects }) => {
  return (
    <Layout>
      <Head title="Home" />

      <Hero />
      <About />
      <Projects projects={projects} />
      <Contact />

      <Footer />
    </Layout>
  );
};

export async function getStaticProps() {
  const projects: IProject[] = await getProjects();

  return {
    props: { projects },
  };
}

export default Home;
