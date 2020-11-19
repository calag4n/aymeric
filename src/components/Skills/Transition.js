import PropTypes from 'prop-types'
import { useSpring, animated } from 'react-spring/web.cjs' // web.cjs is required for IE 11 support
import Collapse from '@material-ui/core/Collapse'

/**
 * Describe the transition of the Mui TreeItem
 * 
 * @component
 * @param {object} props
 * @example
 * <Transition in={true} />
 */
const Transition = props => {
  const style = useSpring({
    from: { opacity: 0, transform: 'translate3d(20px,0,0)', color: 'white' },
    to: {
      opacity: props.in ? 1 : 0,
      transform: `translate3d(${props.in ? 0 : 20}px,0,0)`,
      color: 'white',
    },
  })

  return (
    <animated.div style={style}>
      <Collapse {...props} />
    </animated.div>
  )
}

Transition.propTypes = {
  in: PropTypes.bool,
}

export default Transition
