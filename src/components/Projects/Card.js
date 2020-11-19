import PropTypes from 'prop-types'
import styled from 'styled-components'
import MuiCard from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import MuiButton from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import ReactMarkdown from 'react-markdown'

/**
 * Displays a project in a card
 *
 * @component
 * @example
 * <Card
 *   tech='Python'
 *   title='Awesome title'
 *   kind='ML Engineering'
 *   description="It's an awesome project !"
 *   link='https://awesome-project.url'
 *   linkTitle='Project homepage'
 * />
 */
const Card = ({ tech, title, kind, description, link, linkTitle }) => {
  return (
    <StyledCard variant="outlined">
      <article>
        <CardContent>
          <Tech gutterBottom>{tech}</Tech>

          <Typography variant="h5" component="h2">
            {title}
          </Typography>

          <Kind>{kind}</Kind>

          <Typography variant="body2" component="div">
            <ReactMarkdown>{description}</ReactMarkdown>
          </Typography>
        </CardContent>

        <CardActions>
          <Button
            variant="outlined"
            size="small"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {linkTitle}
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
  color: ${({ theme }) => theme.colors.subtext};
`

const Kind = styled(Typography)`
  margin-bottom: 12px;
  color: ${({ theme }) => theme.colors.subtext};
`

const Button = styled(MuiButton)`
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
`
