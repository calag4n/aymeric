//@ts-check
import PropTypes from 'prop-types'
import styled from 'styled-components'
import MuiCard from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import ReactMarkdown from 'react-markdown'

/**
 * Displays a project in a card
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
  return (
    <StyledCard variant="outlined">
      <article>
        <CardContent>
          <Tech color="textSecondary" gutterBottom>
            {tech}
          </Tech>

          <Typography variant="h5" component="h2">
            {title}
          </Typography>

          <Kind color="textSecondary">{kind}</Kind>

          <Typography variant="body2" component="p">
            <ReactMarkdown>{description}</ReactMarkdown>
          </Typography>
        </CardContent>

        <CardActions>
          <Button variant="outlined" color="secondary" size="small" href={link}>
            Learn More
          </Button>
        </CardActions>
      </article>
    </StyledCard>
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

const StyledCard = styled(MuiCard)`
  min-width: 200px;
`

const Tech = styled(Typography)`
  font-size: 14px;
`

const Kind = styled(Typography)`
  margin-bottom: 12px;
`
