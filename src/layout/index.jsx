import React from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import PageNav from "../../gatsby-theme-apollo/packages/gatsby-theme-apollo-core/src/components/page-nav";
import "./index.css";
import "./styles.less";

export default class MainLayout extends React.Component {
    render() {
        const { children } = this.props;
        return (
            <div className="layout-container">
                <Helmet>
                    <meta name="description" content={config.siteDescription} />
                    <html lang="en" />
                </Helmet>
                <div>
                    <PageNav></PageNav>
                </div>
                <div>
                    <h1>Welcome to My Site</h1>
                    {children}
                </div>
            </div>
        );
    }
}
