import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { config } from '../config/site'

/**
 * Inject data in <head> for SEO purpose
 *
 * @component
 * @example
 * <SEO
 *   description='Page description'
 *   meta={[{property: 'meta-property', content: 'meta-content'}]}
 *   title='Page title'
 *   imageUrl='https://urlto.img'
 *   pageUrl='https://site.com/page-url'
 * />
 */
const SEO = ({ description, title, imageUrl, pageUrl, meta }) => {
  const _description = description || config.siteDescription
  const _title = title || config.siteTitle
  const _imageUrl = imageUrl || config.siteImageUrl
  const _pageUrl = pageUrl || config.siteUrl
  const _meta = meta || config.meta

  const twitter = config.makeTwitterCard(_description, _title, _imageUrl)
  const facebook = config.makeFBCard(_description, _title, _imageUrl, _pageUrl)

  return (
    <Helmet
      htmlAttributes={{
        lang: config.siteLang,
      }}
      title={_title}
      meta={[
        {
          name: `description`,
          content: _description,
        },
      ].concat(twitter, facebook, _meta)}
    />
  )
}

SEO.propTypes = {
  description: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
  imageUrl: PropTypes.string,
  pageUrl: PropTypes.string,
}

export default SEO
