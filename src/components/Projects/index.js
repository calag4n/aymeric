import { Grid as MuiGrid } from '@material-ui/core'
import styled from 'styled-components'

import Card from './Card'
import { projects } from '../../content/projects'
import withParallaxLayer from '../../HOC/withParallaxLayer'

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
  return (
    <section>
      <H1>My Projects</H1>

      <Grid container spacing={4} justify="center">

        {projects.map(({ title, tech, kind, description, link, linkTitle }, i) => (
          <Grid item xs={12} sm={6} md={4} key={`project-${title}-${i}`}>
            <Card
              title={title}
              tech={tech}
              kind={kind}
              description={description}
              link={link}
              linkTitle={linkTitle}
            />
          </Grid>
        ))}
      </Grid>
    </section>
  )
}

export default withParallaxLayer(Projects)

const H1 = styled.h1`
  color: ${({ theme }) => theme.colors.title};
  text-align: center;
  font-size: ${({ theme }) => theme.fonts.size.sectionTitle};
`

const Grid = styled(MuiGrid)`
  padding-left: 40px;
  padding-right: 40px;
`
