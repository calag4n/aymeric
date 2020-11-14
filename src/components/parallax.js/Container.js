import PropTypes from 'prop-types'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import { getSvgUrl } from '../../utils'
import stars from '../../images/stars.svg'


/**
 * The Parallax Container sets the page
 * 
 * @component
 * @param {{
 *   pages: number,
 *   children: JSX.Element[] | JSX.Element,
 * }} props
 * @example
 * <Container>
 *   <Layer />
 *   <Layer />
 * </Container>
 */
const Container = ({pages, children}) => {
  return (
    <Parallax pages={pages} style={{ right: 0, left: 0, top: 0, bottom: 0 }}>
      <ParallaxLayer
        offset={0}
        speed={0}
        factor={6}
        style={{
          // backgroundImage: getSvgUrl('stars', true),
          backgroundImage: 'url(./assets/images/stars.svg)',
          backgroundSize: 'cover',
          transition: 'background-image 4s ease-in-out',
        }}
      />
      {children} 
    </Parallax>
  )
}

Container.propTypes = {
  pages: PropTypes.number.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
}

export default Container
