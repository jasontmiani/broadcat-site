import React from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import PageNav from "../gatsby-theme-apollo-core/page-nav"
import {colors} from '../gatsby-theme-apollo-core/utils/colors'
import "./index.css";
import './styles.less'

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div className="layout-container">
        <PageNav />
        <div>
          <h1>Welcome to My Site</h1>
      </div> 
        <Helmet>
          <meta name="description" content={config.siteDescription} />
          <html lang="en" />
        </Helmet>
          {children}
      </div>
    );
  }
}
