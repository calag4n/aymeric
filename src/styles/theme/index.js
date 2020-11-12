import { useContext } from 'react'
import { ThemeContext } from 'styled-components'


// ***** CUSTOM THEME *****
	 
	 export const theme = {

		 colors: {
			 bg: '#253237',
			 primary: '#EB0053',
			 secondary: 'rgb(33, 150, 243)',
			 white: '#fff',

			 title: '#fff',
			 text: '#fff',
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
					treeView: 30
				}
			},

			icons:{
				treeView:{
					size: 14
				}
			},

			spacings: {

			}
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
