import React, { Component } from "react";
import ReactDOM from 'react-dom '
import Helmet from "react-helmet";
import Layout from "../layout";
import About from "../components/About/About";
import config from "../../data/SiteConfig";



function AboutPage(props) {
  
    return (
      <Layout>
        <div className="about-container">
          <Helmet title={`About | ${config.siteTitle}`} />
          <About />
        </div>
      </Layout>
    );
}

export default AboutPage;



