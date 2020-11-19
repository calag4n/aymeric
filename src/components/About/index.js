import styled from 'styled-components'
import withParallaxLayer from '../../HOC/withParallaxLayer'

/**
 * About section
 *
 * @component
 * @example
 * <About />
 */
const About = () => {
  return (
    <Section>
      <h1>About me</h1>
      <p>
        I'm a French <strong>engineer</strong> specialized in{' '}
        <strong>machine learning</strong> and <strong>cyber-physics</strong>.
        <br />I have a great interest in medical topics in all shapes and forms,
        yet I never say no to any AI challenges !<br></br>I also love starting
        projects from scratch and learn new things, such as this website !
      </p>
    </Section>
  )
}

export default withParallaxLayer(About)

const Section = styled.section`
  color: ${({ theme }) => theme.colors.text};
  font-size: large;
  text-align: center;
  padding: 0 ${({ theme }) => theme.spacings.sectionPadding};

  & h1 {
    color: ${({ theme }) => theme.colors.title};
    font-size: ${({ theme }) => theme.fonts.size.sectionTitle};
  }
`
