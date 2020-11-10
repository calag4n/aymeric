//@ts-check
import PropTypes from 'prop-types'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import MuiCard from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  root: {
    minWidth: 200,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
})

/**
 * Displays each project in a card
 *
 * @param {{
 *   tech?: string,
 *   title: string,
 *   kind?: string,
 *   description: string,
 *   link: string,
 * }} props
 *
 * @component
 * @example
 * <Card
 *   title='Awesome title'
 *	 tech='Python'
 *	 kind='ML Engineering'
 *	 description="It's an awesome project !"
 *	 link='https://awesome-project.url'
 * />
 */
const Card = ({ tech, title, kind, description, link }) => {
  const classes = useStyles()

  return (
    <MuiCard className={classes.root} variant="outlined">
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {tech}
        </Typography>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {kind}
        </Typography>
        <Typography variant="body2" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined" color="secondary" size="small" href={link}>
          Learn More
        </Button>
      </CardActions>
    </MuiCard>
  )
}

Card.propTypes = {
  tech: PropTypes.string,
  title: PropTypes.string.isRequired,
  kind: PropTypes.string,
  description: PropTypes.string.isRequired,
  link: PropTypes.string,
}

export default Card
