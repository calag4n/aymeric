import styled from 'styled-components'
import MuiButton from '@material-ui/core/Button'
import withParallaxLayer from '../../HOC/withParallaxLayer'

/**
 * The Contact section
 *
 * @component
 * @example
 * <Contact />
 */
const Contact = () => {
  return (
    <Section role="contentinfo">
      <H1>Contact Me !</H1>
      <Button
        variant="contained"
        href="https://www.linkedin.com/in/aymeric-basset/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Linkedin
      </Button>
      <Button
        variant="contained"
        href="./assets/Aymeric_Basset_resume.pdf"
        download="aymeric_basset_resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        Resume
      </Button>
      <Button
        variant="contained"
        href="https://github.com/AymericBasset"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </Button>
    </Section>
  )
}

export default withParallaxLayer(Contact)

const Section = styled.section`
  & > * {
    margin: 8px;
  }
`

const H1 = styled.h1`
  color: ${({ theme }) => theme.colors.title};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.fonts.size.sectionTitle};
`

const Button = styled(MuiButton)`
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary};
`
