import React, { useRef } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import Fade from 'react-reveal/Fade'
import {  ThemeProvider } from '@material-ui/core'

import Skills from './components/skills'
import About from './components/about'
import Subtitle from './components/home/Subtitle'
import Projects from './components/projects'
import Experience from './components/experience'
import Contact from './components/contact'
import { GlobalStyle } from './styles/global'
import { theme } from './styles/theme'

import pytorch from './images/pytorch.png'
import python from './images/python.png'
import keras from './images/keras.png'
import tf from './images/tf.png'
import skl from './images/skl.png'
import github from './images/github.png'
import pandas from './images/pandas.png'
import SEO from './components/seo'

/**
 * Return an svg's url
 *
 * @param {string} name
 * @param {Boolean} [wrap]
 * @return {string}
 *
 * @example
 * url('stars', true)
 */
const url = (name, wrap = false) =>
  `${
    wrap ? 'url(' : ''
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ')' : ''
  }`

/**
 * The root component
 *
 * @component
 * @example
 * <App />
 */
const App = () => {
  const parallax = useRef()

  return (
    <>
      <SEO />
      <GlobalStyle />
      <Main role="main">
        <Parallax ref={parallax} pages={7}>
          <ParallaxLayer
            offset={0}
            speed={0}
            factor={6}
            style={{
              backgroundImage: url('stars', true),
              backgroundSize: 'cover',
            }}
          />

          <ParallaxLayer
            offset={0}
            speed={0.1}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div role="banner">
              <h1 style={{ color: 'white', fontSize: '4em' }}>
                Hi, my name is
                <Fade top big cascade>
                  <span style={{ color: '#f50057' }}> Aymeric</span>
                </Fade>
              </h1>
              <Subtitle />
            </div>
          </ParallaxLayer>

          <ParallaxLayer
            offset={1}
            speed={0.1}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <About />
          </ParallaxLayer>

          <ParallaxLayer
            offset={2.3}
            speed={0.1}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <h1 style={{ color: 'white' }}>My Background</h1>
          </ParallaxLayer>

          <ParallaxLayer
            offset={3}
            speed={0.1}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Experience />
          </ParallaxLayer>

          <ParallaxLayer
            offset={4.5}
            speed={-0}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Skills />
          </ParallaxLayer>
          <ParallaxLayer
            offset={5}
            speed={-0}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Projects />
          </ParallaxLayer>

          <ParallaxLayer
            offset={6}
            speed={-0}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Contact />
          </ParallaxLayer>

          <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
            <img
              src={pytorch}
              style={{ display: 'block', width: '20%', marginLeft: '55%' }}
            />
            <img
              src={keras}
              style={{ display: 'block', width: '10%', marginLeft: '15%' }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
            <img
              src={skl}
              style={{ display: 'block', width: '20%', marginLeft: '70%' }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
            <img
              src={tf}
              style={{ display: 'block', width: '10%', marginLeft: '10%' }}
            />
            <img
              src={python}
              style={{ display: 'block', width: '20%', marginLeft: '75%' }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
            <img
              src={pandas}
              style={{ display: 'block', width: '20%', marginLeft: '60%' }}
            />
            <img
              src={pytorch}
              style={{ display: 'block', width: '25%', marginLeft: '30%' }}
            />
            <img
              src={pytorch}
              style={{ display: 'block', width: '10%', marginLeft: '80%' }}
            />
          </ParallaxLayer>

          <ParallaxLayer offset={1.5} speed={0.4} style={{ opacity: 0.5 }}>
            <img
              src={github}
              style={{ display: 'block', width: '15%', marginLeft: '15%' }}
            />
          </ParallaxLayer>
        </Parallax>
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
const ThemedApp = () => {
  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  )
}

ReactDOM.render(<ThemedApp />, document.getElementById('root'))
