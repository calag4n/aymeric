//@ts-check
import PropTypes from 'prop-types'
import Fade from 'react-reveal/Fade'
import styled from 'styled-components'
import withParallaxLayer from '../../HOC/withParallaxLayer'
import Subtitle from './Subtitle'
import { useAppTheme } from '../../styles/theme'

/**
 * @component
 * @param {{
 *   offset?: number,
 *   speed?: number,
 * }} props
 */
const Home = ({ offset, speed }) => {
  const { colors } = useAppTheme()
  return (
    <Section role="banner">

      <H1>
          Hi, my name is
          <Fade top cascade>
            <span style={{color: colors.primary}}> Aymeric</span>
            </Fade>
      </H1>

      <Subtitle />
    </Section>
  )
}

Home.propTypes = {
  offset: PropTypes.number,
  speed: PropTypes.number,
}

export default withParallaxLayer(Home)

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  width: 80vw;
`

const H1 = styled.h1`
  color: ${({ theme }) => theme.colors.title};
  font-size: ${({ theme }) => theme.fonts.size.homeTitle};
  max-height: 1em;
  line-height: 1em;
`