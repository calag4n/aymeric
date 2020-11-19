import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { skills } from '../../content/skills'

// ***** CUSTOM THEME *****

export const theme = {
  colors: {
    bg: '#253237',
    primary: '#EB0053',
    secondary: 'rgb(33, 150, 243)',
    white: '#fff',
    greyMedium: '#707070',

    title: '#fff',
    text: '#fff',
    subtext: '#707070',
  },

  fonts: {
    family: {
      title: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
          'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
          sans-serif`,

      text: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
          'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
          sans-serif`,

      code: `source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
          monospace`,
    },
    size: {
      homeTitle: 'clamp(16px, 7vw, 80px)',
      homeSubtitle: 'clamp(14px, 3.2vw, 50px)',
      sectionTitle: '2em',
      treeView: {
        title: 'clamp(1.5em, 3.9vw, 30px)',
        items: 'clamp(1.2em, 3.8vw, 30px)',
      },
    },
  },

  icons: {
    treeView: {
      size: 14,
    },
  },

  spacings: {
    homeSubtitle: {
      smallPhone: 40,
      bigPhone: 60,
      tablet: 80,
      desktop: 120,
    },
    sectionPadding: '40px',
    skillsPaddingTop: 'clamp(100px, 3vw, 14em)',
  },
}

export const useAppTheme = () => useContext(ThemeContext)

// ***** MEDIA QUERIES *****

export const breakpoints = {
  startBigPhone: 530,
  startTablet: 700,
  startDesktop: 1100,
  startWideScreen: 1470,
}

export const device = {
  smallPhone: `(max-width: ${breakpoints.startBigPhone - 1}px)`,
  bigPhone: `(min-width: ${breakpoints.startBigPhone}px) and (max-width: ${
    breakpoints.startTablet - 1
  }px)`,
  tablet: `(min-width: ${breakpoints.startTablet}px) and (max-width: ${
    breakpoints.startDesktop - 1
  }px)`,
  desktop: `(min-width : ${breakpoints.startDesktop}px) and (max-width: ${
    breakpoints.startWideScreen - 1
  }px)`,
  wideScreen: `(min-width : ${breakpoints.startWideScreen}px)`,

  uptoTablet: `(max-width: ${breakpoints.startDesktop - 1}px)`,
  fromTablet: `(min-width: ${breakpoints.startTablet}px)`,
  upToPhone: `(max-width: ${breakpoints.startTablet - 1}px)`,
}
