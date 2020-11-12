import MuiTreeItem from '@material-ui/lab/TreeItem'
import Transition from './Transition'
import { fade, withStyles } from '@material-ui/core'
import { useAppTheme } from '../../styles/theme'

/**
 * Styling Mui HOC
 * 
 * @component
 * @example
 * <TreeItem />
 */
const TreeItem = withStyles(theme => {
  const {fonts} = useAppTheme()

  return {
  iconContainer: {
    '& .close': {
      opacity: 0.3,
    },
  },
  group: {
    marginLeft: 0,
    paddingLeft: 50,
    borderLeft: `1px dashed ${fade(theme.palette.text.primary, 0.4)}`,
  },

  label: {
    fontSize: fonts.size.treeView,
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
}})(props => <MuiTreeItem {...props} TransitionComponent={Transition} />)

export default TreeItem
