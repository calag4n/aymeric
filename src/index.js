import React, { Suspense, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import { StylesProvider } from '@material-ui/core/styles'

import Experience from './components/Experience'
import SEO from './components/seo'
import Home from './components/Home'
import ParallaxContainer from './components/parallax.js/Container'
import ImagesLayer from './components/parallax.js/ImagesLayer'
import { SizingsProvider } from './contexts/sectionsSizingContext'
import useWindowSize from './hooks/useWindowSize'
import { useSectionsSizing } from './contexts/sectionsSizingContext'
import withLazyLoading from './HOC/withLazyLoading'

import { GlobalStyle } from './styles/global'
import { theme } from './styles/theme'
import { log } from './utils/log'

const LazySkills = React.lazy(() => import('./components/Skills'))
const LazyAbout = React.lazy(() => import('./components/About'))
const LazyProjects = React.lazy(() => import('./components/Projects'))
const LazyContact = React.lazy(() => import('./components/Contact'))

const Skills = withLazyLoading(LazySkills)
const About = withLazyLoading(LazyAbout)
const Projects = withLazyLoading(LazyProjects)
const Contact = withLazyLoading(LazyContact)

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

      <ParallaxContainer pages={pagesValue || 7}>
        <Home offset={homeOffset} speed={0.1} />

        <Main role="main">
          <About offset={aboutOffset} speed={0.1} />

          <Experience offset={experienceOffset} speed={0.2} />

          <Skills
            offset={skillsOffset}
            speed={0.3}
            layerStyle={{
              alignItems: 'flex-start',
            }}
          />

          <Projects offset={projectsOffset} speed={-0.1} />

          <Contact offset={contactOffset} speed={0.1} />

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
