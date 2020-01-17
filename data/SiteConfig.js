const config = {
  siteTitle: "broadcat website", // Site title.
  siteTitleShort: "broadcat site", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "broadcat template", // Alternative site title for SEO.
  siteLogo: "/static/logos/lambda-cat.png", // Logo used for SEO and manifest.
  siteUrl: "https://jasontmiani@gmail.com", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "The marketing site & design template for broadcat.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "1825356251115265", // FB Application ID for using app insights
  googleAnalyticsID: "UA-47311644-5", // GA tracking ID.
  disqusShortname: "broadcat", // Disqus shortname.
  postDefaultCategoryID: "Gaming", // Default category for posts.
  dateFromFormat: "MM/DD/YY", // Date format used in the frontmatter.
  dateFormat: "MM/DD/YY", // Date format for display.
  postsPerPage: 4, // Amount of posts displayed per listing page.
  userName: "Kalzad", // Username to display in the author segment.
  userEmail: "jasontmiani@gmail.com", // Email used for RSS feed's author segment
  userInstagram: "jasontmiani",
  userTwitter: "@jasontmiani",
  twitchUserID: "24409212",
  twitchClientID: "xrmtyevo2edce45tbw4ipti6a4vcz1",
  // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Los Angeles, CA", // User location to display in the author segment.
  userAvatar:
    "https://github.com/jasontmiani/broadcat-site/blob/master/static/logos/lambda-cat.png", // User avatar to display in the author segment.
  userDescription: "Testing!", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/jasontmiani/broadcat-site.git",
      iconClassName: "fa fa-github"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/jtmiani",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "Email",
      url: "jasontmiani@gmail.com",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "Copyright © 2019. Kalzad", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#004972b8", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0" // Used for setting manifest background color.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
