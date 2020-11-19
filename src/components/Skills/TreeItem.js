import PropTypes from 'prop-types'
import MuiTreeItem from '@material-ui/lab/TreeItem'
import Transition from './Transition'
import { fade, withStyles } from '@material-ui/core'
import { useAppTheme } from '../../styles/theme'
import styled from 'styled-components'

/**
 * Wraps each skill item
 *
 * @component
 * @param {object | undefined} props
 * @example
 * <TreeItem />
 */
const TreeItem = props => (
  <StyledTreeItem {...props} TransitionComponent={Transition} />
)

TreeItem.propTypes = {
  props: PropTypes.object,
}

export default TreeItem

const StyledTreeItem = styled(MuiTreeItem)`
  & .MuiTreeItem-iconContainer {
    & .close {
      opacity: 0.3;
    }
  }

  & .MuiTreeItem-group {
    margin-left: 0;
    padding-left: 50px;
    border-left: 1px dashed rgba(0, 0, 0, 0.4);
  }

  & .MuiTreeItem-label {
    font-size: ${({ theme }) => theme.fonts.size.treeView.items};
    &:hover {
      background-color: transparent;
    }
  }
`
