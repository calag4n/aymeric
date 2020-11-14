import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import { StylesProvider } from '@material-ui/core/styles'

import Skills from './components/Skills'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import { GlobalStyle } from './styles/global'
import { theme } from './styles/theme'

import SEO from './components/seo'
import Home from './components/Home'
import ParallaxContainer from './components/parallax.js/Container'
import ImagesLayer from './components/parallax.js/ImagesLayer'
import { SizingsProvider, useSizings } from './contexts/sizingsContext'

/**
 * The App root component
 *
 * @component
 * @example
 * <App />
 */
const App = () => {
  // const [skillsHeight, projectsOffset, handleResize] = useSectionResize('skills-section', 4.9)

  const {skillSizing:{projectsOffset, contactOffset, pages}} = useSizings()

  return (
    <>
      <SEO />
      <GlobalStyle />

      <Main role="main">
        <ParallaxContainer pages={pages}>
            <Home offset={0} speed={0.1} />

            <About offset={1} speed={0.1} />

            <Experience offset={2.9} speed={0.2} />

            <Skills
              offset={4.3}
              speed={0.1}
              layerStyle={{
                alignItems: 'flex-start',
                justifyContent: 'center',
              }}
            />

            <Projects offset={projectsOffset} speed={-0.1} />

            <Contact offset={contactOffset} speed={0} />

            <ImagesLayer />
          </ParallaxContainer>
      </Main>
    </>
  )
}

const Main = styled.main`
  width: 100%;
  height: 100%;
`

/**
 * Surround App with Theme Provider
 * @component
 *
 * @example
 * <ThemeProvider theme={theme}>
 *    <App />
 * </ThemeProvider>
 */
const Contexts = () => {
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <SizingsProvider>
          <App />
        </SizingsProvider>
      </ThemeProvider>
    </StylesProvider>
  )
}

ReactDOM.render(<Contexts />, document.getElementById('root'))
