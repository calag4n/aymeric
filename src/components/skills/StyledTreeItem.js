//@ts-check
import React from 'react'
import TreeItem from '@material-ui/lab/TreeItem'
import Transition from './Transition'
import { fade, withStyles } from '@material-ui/core'

/**
 * Styling Mui HOC
 * 
 * @component
 * @example
 * <StyledTreeItem />
 */
const StyledTreeItem = withStyles(theme => ({
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
    fontSize: '30px',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
}))(props => <TreeItem {...props} TransitionComponent={Transition} />)

export default StyledTreeItem
