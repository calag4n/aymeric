import React, { Suspense, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import { StylesProvider } from '@material-ui/core/styles'

// import Skills from './components/Skills'
// import About from './components/About'
// import Projects from './components/Projects'
import Experience from './components/Experience'
// import Contact from './components/Contact'
import { GlobalStyle } from './styles/global'
import { theme } from './styles/theme'

import SEO from './components/seo'
import Home from './components/Home'
import ParallaxContainer from './components/parallax.js/Container'
import ImagesLayer from './components/parallax.js/ImagesLayer'
import { SizingsProvider } from './contexts/sectionsSizingContext'
import useWindowSize from './hooks/useWindowSize'
import { useSectionsSizing } from './contexts/sectionsSizingContext'
import { log } from './utils/log'
const Skills = React.lazy(() => import('./components/Skills'))
const About = React.lazy(() => import('./components/About'))
const Projects = React.lazy(() => import('./components/Projects'))
const Contact = React.lazy(() => import('./components/Contact'))
// const Experience = React.lazy(() => import('./components/Experience'))

/**
 * The App root component
 *
 * @component
 * @example
 * <App />
 */
const App = () => {
  const {
    sizes,
    sizes: {
      pagesValue,
      homeOffset,
      aboutOffset,
      experienceOffset,
      skillsOffset,
      projectsOffset,
      contactOffset,
    },
    setSizes,
  } = useSectionsSizing()

  return (
    <>
      <SEO />
      <GlobalStyle />

      <ParallaxContainer
        pages={pagesValue || 7}
        style={{ willChange: 'unset' }}
      >
        <Home offset={homeOffset} speed={0.1} />

        <Main role="main">
          <Suspense fallback={<span hidden>.</span>}>
            <About offset={aboutOffset} speed={0.1} />
          </Suspense>
          {/* <Suspense fallback={<span>Loading...</span>}> */}
            <Experience offset={experienceOffset} speed={0.2} />
          {/* </Suspense> */}
          <Suspense fallback={<span hidden>.</span>}>
            <Skills
              offset={skillsOffset}
              speed={0.3}
              layerStyle={{
                alignItems: 'flex-start',
              }}
            />
          </Suspense>
          <Suspense fallback={<span hidden>.</span>}>
            <Projects offset={projectsOffset} speed={-0.1} />
          </Suspense>
          <Suspense fallback={<span hidden>.</span>}>
            <Contact offset={contactOffset} speed={0} />
          </Suspense>
          <ImagesLayer />
        </Main>
      </ParallaxContainer>
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
 * <Contexts>
 *    <App />
 * </Contexts>
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
