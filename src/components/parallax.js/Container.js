import PropTypes from 'prop-types'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import styled from 'styled-components'
import { useSectionsSizing } from '../../contexts/sectionsSizingContext'

/**
 * The Parallax Container sets the page
 *
 * @component
 * @example
 * <Container pages={7}>
 *   <Layer />
 *   <Layer />
 * </Container>
 */
const Container = ({ pages, children }) => {
  const {
    sizes: { starsFactor },
  } = useSectionsSizing()

  return (
    <Parallax pages={pages} style={{ right: 0, left: 0, top: 0, bottom: 0 }}>
      <Layer offset={0} speed={0} factor={starsFactor} />
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

const Layer = styled(ParallaxLayer)`
  animation: open 4s;
  background-image: url('./assets/images/stars.svg');
  background-size: cover !important;

  @keyframes open {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`
