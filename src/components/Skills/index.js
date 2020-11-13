import MuiTreeView from '@material-ui/lab/TreeView'
import styled from 'styled-components'

import MinusSquare from './MinusSquare'
import PlusSquare from './PlusSquare'
import CloseSquare from './CloseSquare'
import TreeItem from './TreeItem'
import { skills } from '../../content/skills'
import withParallaxLayer from '../../HOC/withParallaxLayer'
import { useEffect, useRef } from 'react'
import useSectionResize from '../../hooks/useSectionResize'

import elementResizeEvent, {unbind} from 'element-resize-event'


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
const CustomizedTreeView = () => {

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

  // const handleToggle = event => {
  //   // const height = sectionRef.current.offsetHeight
  //   const height = document.getElementById('skills-section').clientHeight
  //   const {target} = event
  //   console.log(target.height)
  // }

    const [skillsHeight, projectsOffset] = useSectionResize('skills-section')
    
 
    
  

  return (
    <Section 
    // ref={skillsRef} 
    id='skills-section'>
      <TreeView
        defaultExpanded={['0']}
        defaultCollapseIcon={<MinusSquare />}
        defaultExpandIcon={<PlusSquare />}
        defaultEndIcon={<CloseSquare />}
        // onNodeToggle={e=> handleToggle(e)}
      >
        {renderTree(skills)}
      </TreeView>
    </Section>
  )
}

export default withParallaxLayer(CustomizedTreeView)

const Section = styled.section`
  padding: 0 ${({ theme }) => theme.spacings.sectionPadding};
  padding-top: ${({ theme }) => theme.spacings.skillsPaddingTop};
  z-index: 99;
`;

const TreeView = styled(MuiTreeView)`
  margin: auto;
  color: ${({ theme }) => theme.colors.primary};
  /* height: 2000px; */
  flex-grow: 1;
  max-width: 600px;
`
