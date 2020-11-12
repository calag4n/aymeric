import MuiTreeView from '@material-ui/lab/TreeView'
import styled from 'styled-components'

import MinusSquare from './MinusSquare'
import PlusSquare from './PlusSquare'
import CloseSquare from './CloseSquare'
import TreeItem from './TreeItem'
import { skills } from '../../content/skills'
import withParallaxLayer from '../../HOC/withParallaxLayer'

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

  return (
    <TreeView
      defaultExpanded={['0']}
      defaultCollapseIcon={<MinusSquare />}
      defaultExpandIcon={<PlusSquare />}
      defaultEndIcon={<CloseSquare />}
    >
      {renderTree(skills)}
    </TreeView>
  )
}

export default withParallaxLayer(CustomizedTreeView)

const TreeView = styled(MuiTreeView)`
  margin: auto;
  color: ${({ theme }) => theme.colors.primary};
  height: 2000px;
  flex-grow: 1;
  max-width: 600px;
`
