import { theme } from '../styles/theme'

export const config = {

  sizesInitComputing:{

    // ----- Skills Sizing -----
    /**
     * lines represent how many lines contain each expendable item.
     */
    lines: [null, 0, 6, 6, 9, 6, 1, 1, 3],
    multiplier: 0.05,

    // ----- Sections Initial values -----
    pagesInitValue: 7.2,
    homeInitOffset: 0,
    aboutInitOffset: 1,
    experienceInitOffset: 3,
    skillsInitOffset: 4.3,
    projectsInitOffset: 4.9,
    contactInitOffset: 6.2,
  },

  // ----- Content & SEO relatives -----
  siteTitle: 'Aymeric Basset | Portfolio', // Navigation and Site Title
  siteTitleAlt: 'Aymeric Basset', // Title short version for manifest
  siteUrl: 'https://aymericbasset.github.io/', // Url of your site. No trailing slash!
  siteLanguage: 'en-EN', // Language Tag on <html> element
  siteLogo: 'logo.png', // Used for SEO and manifest
  siteLogoAlt: 'Logo Aymeric Basset',
  siteIcon: 'src/assets/images/icon.png',
  siteDescription: `Aymeric Basset's portfolio website.`, // 300 characters max
  siteAuthor: 'Aymeric Basset',
  siteLang: 'en',
  meta: [],

  // Manifest colors
  themeColor: theme.colors.primary,
  backgroundColor: theme.colors.bg,

  // FB & Twitter cards
  userTwitter: '', // Twitter Username '@yourtwittername'
  siteFBAppID: '', // Facebook App ID
  ogLanguage: 'en_EN', // Facebook Language 'fr_FR'
  siteImageUrl: '', // Provide an image when shared in FB & Twitter

  makeTwitterCard: function (description, title, imageUrl) {
    if (this.userTwitter) {
      return [
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:site`,
          content: this.siteUrl,
        },
        {
          name: `twitter:creator`,
          content: this.userTwitter,
        },
        {
          name: `twitter:description`,
          content: description,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:image`,
          content: imageUrl,
        },
      ]
    }
    return []
  },

  makeFBCard: function (description, title, imageUrl, pageUrl) {
    if (this.siteFBAppID) {
      return [
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `fb:app_id`,
          content: this.siteFBAppID,
        },
        {
          property: `og:site_name`,
          content: this.siteUrl,
        },
        {
          property: `og:locale`,
          content: this.ogLanguage,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:image`,
          content: imageUrl,
        },
        {
          property: `og:url`,
          content: pageUrl,
        },
      ]
    }
    return []
  },
}
