import MuiTreeItem from '@material-ui/lab/TreeItem'
import Transition from './Transition'
import { fade, withStyles } from '@material-ui/core'
import { useAppTheme } from '../../styles/theme'
import styled from 'styled-components'

/**
 * Styling Mui HOC
 * 
 * @component
 * @example
 * <TreeItem />
 */
// const TreeItem = withStyles(theme => {
//   const {fonts} = useAppTheme()

//   return {
//   iconContainer: {
//     '& .close': {
//       opacity: 0.3,
//     },
//   },
//   group: {
//     marginLeft: 0,
//     paddingLeft: 50,
//     borderLeft: `1px dashed ${fade(theme.palette.text.primary, 0.4)}`,
//   },

//   label: {
//     fontSize: fonts.size.treeView,
//     '&:hover': {
//       backgroundColor: 'transparent',
//     },
//   },
// }})(props => <MuiTreeItem {...props} TransitionComponent={Transition} />)

const TreeItem = props => <StyledTreeItem {...props} TransitionComponent={Transition} />

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
    border-left: 1px dashed rgba(0, 0, 0, .4);
  }

  & .MuiTreeItem-label{
    font-size: ${({ theme }) => theme.fonts.size.treeView};
    &:hover{
      background-color: transparent;
    }
  }
`
