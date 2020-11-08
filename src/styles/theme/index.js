import { useContext } from 'react'
import { ThemeContext } from 'styled-components'

import {createMuiTheme} from '@material-ui/core'

// ***** CUSTOM THEME *****

/* We have to merge mui theme with our custom theme provided
   by styled-components to avoid context conflicts */
const muiTheme = createMuiTheme({})

export const theme = {
  ...muiTheme,
	colors: {
		bg: '#253237',
		primary: '#f50057',
		secondary: 'rgb(33, 150, 243)',
		white: '#fff',
	},
}

export const useAppTheme = () => useContext(ThemeContext)


// ***** MEDIA QUERIES *****

const breakpoints = {
	startBigPhone: 530,
	startTablet: 700,
	startDesktop: 1100,
}

export const mediaQueries = {
	smPhone: `(max-width: ${breakpoints.startBigPhone - 1}px)`,
	phone: `(min-width: ${breakpoints.startBigPhone}px) and (max-width: ${
		breakpoints.startTablet - 1
	}px)`,
	tablet: `(min-width: ${breakpoints.startTablet}px) and (max-width: ${
		breakpoints.startDesktop - 1
	}px)`,
	desktop: `(min-width : ${breakpoints.startDesktop}px)`,
	uptoTablet: `(max-width: ${breakpoints.startDesktop - 1}px)`,
	fromTablet: `(min-width: ${breakpoints.startTablet}px)`,
	upToPhone: `(max-width: ${breakpoints.startTablet - 1}px)`,
}
