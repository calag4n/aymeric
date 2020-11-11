//@ts-check
import React from 'react'
import styled from 'styled-components'
import { theme } from '../../styles/theme'

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
        I'm a French engineer specialized in machine learning and cyber-physics.
        <br />I have a great interest in medical topics in all shapes and forms,
        yet I never say no to any AI challenges !<br></br>I also love starting
        projects from scratch and learn new things, such as this website !
      </p>
    </Section>
  )
}

export default About

const Section = styled.section`
  color: ${({ theme }) => theme.colors.white};
  font-size: large;
  text-align: center;
`
