//@ts-check
import React from 'react'
import Card from './Card'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { projects } from '../../content/projects'

const useStyles = makeStyles({
	gridContainer: {
		paddingLeft: '40px',
		paddingRight: '40px',
	},
})

/**
 * Projects section
 * 
 * @component
 * @example
 * <Projects>
 *   <Project1 />
 *   <Project2 />
 * </Projects>
 */
const Projects = () => {
  const classes = useStyles()
  const { title, tech, kind, description, link } = projects[0]

	return (
		<div>
			<h1
				style={{
					color: 'white',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				My Projects
			</h1>
			<Grid
				container
				spacing={4}
				className={classes.gridContainer}
				justify='center'
			>
				{Array.from(Array(6).keys()).map( _ => (
					<Grid item xs={12} sm={6} md={4} key={_}>
						<Card
							title={title}
							tech={tech}
							kind={kind}
							description={description}
							link={link}
						/>
					</Grid>
				))}

			</Grid>
		</div>
	)
}

export default Projects