import React from "react";
import Navbar from "@Components/Navbar";

import Hero from "@Components/Home/Hero";
import About from "@Components/Home/About";
import Projects from "@Components/Home/Projects";
import Contact from "@Components/Home/Contact";

import Footer from "@Components/Footer";

import Head from "@Components/Head";
import Layout from "@Components/Layout";

import { getProjects } from "@Api/projects";

const Home = ({ projects }) => {
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
  const projects = await getProjects();

  return {
    props: { projects },
  };
}

export default Home;
