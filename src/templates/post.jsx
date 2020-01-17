import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import UserInfo from "../components/UserInfo/UserInfo";
import Disqus from "../components/Disqus/Disqus";
import PostTags from "../components/PostTags/PostTags";
import SocialLinks from "../components/SocialLinks/SocialLinks";
import SEO from "../components/SEO/SEO";
import Footer from "../components/Footer/Footer";
import config from "../../data/SiteConfig";
import "./b16-tomorrow-dark.css";
import "./post.css";


const ComponentName = ( { data } ) => {
  return (
    <pre>
      <h2>Test</h2>
      {JSON.stringify( data, null, 4 )}
    </pre>
    );
}

export const query = graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          id
          tableOfContents
          rawMarkdownBody
          wordCount {
            words
          }
          fields {
            slug
          }
        }
      }
      totalCount
    }
  }
`

export default ComponentName

