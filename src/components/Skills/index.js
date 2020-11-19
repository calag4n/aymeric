import MuiTreeView from '@material-ui/lab/TreeView'
import styled from 'styled-components'

import MinusSquare from './MinusSquare'
import PlusSquare from './PlusSquare'
import CloseSquare from './CloseSquare'
import TreeItem from './TreeItem'
import { skills } from '../../content/skills'
import withParallaxLayer from '../../HOC/withParallaxLayer'
import { device } from '../../styles/theme'
import { useSectionsSizing } from '../../contexts/sectionsSizingContext'

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
  const { setSizes } = useSectionsSizing()

  /**
   * Recursive function that render nested objects in TreeItem components
   * @param {object} node Contains id, name & children properties.
   * @returns JSX.Element | JSX.Element[]
   */
  const renderTree = ({ id, name, children }) => (
    <TreeItem key={id} nodeId={id} label={name} className={id === '1' ? 'Treeview-title' : '' }>
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
        onNodeToggle={(_, nodes) => setSizes({action: 'toggleSkills', value: nodes})}
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

  & *{

  transition: width .2s ease-in-out;
  }

  & > ul > li > .MuiTreeItem-content > .MuiTreeItem-label{
    font-size: ${({ theme }) => theme.fonts.size.treeView.title};
  }

`

const TreeView = styled(MuiTreeView)`
  margin: auto;
  color: ${({ theme }) => theme.colors.primary};
  flex-grow: 1;

`
