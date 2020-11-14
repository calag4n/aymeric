import MuiTreeView from '@material-ui/lab/TreeView'
import styled from 'styled-components'

import MinusSquare from './MinusSquare'
import PlusSquare from './PlusSquare'
import CloseSquare from './CloseSquare'
import TreeItem from './TreeItem'
import { skills } from '../../content/skills'
import withParallaxLayer from '../../HOC/withParallaxLayer'
import { useSkillSizing } from '../../contexts/skillSizingContext'

/**
 * The skills tree view
 *
 * @component
 * @example
 * <TreeView>
 *   <TreeItem>
 *     <TreeItem />
 *   </TreeItem>
 * </TreeView>
 */
const Skills = () => {
  const { setSkillSizing } = useSkillSizing()

  /**
   * Recursive function that render nested objects in TreeItem components
   *
   * @param {{
   *  id: string,
   *  name: string,
   *  children?: object[]
   * }} node
   * @returns JSX.Element | JSX.Element[]
   */
  const renderTree = ({ id, name, children }) => (
    <TreeItem key={id} nodeId={id} label={name}>
      {Array.isArray(children) ? children.map(node => renderTree(node)) : null}
    </TreeItem>
  )

  return (
    <Section
      // ref={skillsRef}
      id="skills-section"
    >
      <TreeView
        // defaultExpanded={['1']}
        defaultCollapseIcon={<MinusSquare />}
        defaultExpandIcon={<PlusSquare />}
        defaultEndIcon={<CloseSquare />}
        onNodeToggle={(_, nodes) => setSkillSizing(nodes)}
      >
        {renderTree(skills)}
      </TreeView>
    </Section>
  )
}

export default withParallaxLayer(Skills)

const Section = styled.section`
  padding: 0 ${({ theme }) => theme.spacings.sectionPadding};
  padding-top: ${({ theme }) => theme.spacings.skillsPaddingTop};
  z-index: 99;
  min-width: 600px;
`

const TreeView = styled(MuiTreeView)`
  margin: auto;
  color: ${({ theme }) => theme.colors.primary};
  flex-grow: 1;
  max-width: 600px;
`
