import PropTypes from 'prop-types'
import { ParallaxLayer } from 'react-spring/renderprops-addons'

/**
 * High Order Component wich add a Parent ParallaxLayer Component
 * 
 * @component
 * @param {JSX.Element} Component
 * @example
 * withParallaxLayer(SectionComponent)
 */
const withParallaxLayer = Component => ({offset,  speed, factor, layerStyle }) => {
  return (
    <ParallaxLayer
      offset={offset}
      speed={speed}
      factor={factor}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...layerStyle
      }}
    >
      <Component/>
    </ParallaxLayer>
  )
}

withParallaxLayer.propTypes = {
  Component: PropTypes.element.isRequired,
}

export default withParallaxLayer
