//@ts-check
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TreeView from '@material-ui/lab/TreeView'

import MinusSquare from './MinusSquare'
import PlusSquare from './PlusSquare'
import CloseSquare from './CloseSquare'
import StyledTreeItem from './StyledTreeItem'
import { theme } from '../../styles/theme'


const useStyles = makeStyles({
  root: {
    '&$selected': {
      backgroundColor: 'red',
      '&:hover': {
        backgroundColor: 'red',
      },
    },

    margin: 'auto',
    color: theme.colors.primary,
    height: 2000,
    flexGrow: 1,
    maxWidth: 600,
  },
})


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
  const classes = useStyles()

  return (
    <TreeView
      className={classes.root}
      defaultExpanded={['0']}
      defaultCollapseIcon={<MinusSquare />}
      defaultExpandIcon={<PlusSquare />}
      defaultEndIcon={<CloseSquare />}
    >
      <StyledTreeItem nodeId="1" label="My Skills">
        <StyledTreeItem nodeId="2" label="Mathematics" />
        <StyledTreeItem nodeId="3" label="Computer Science">
          <StyledTreeItem nodeId="6" label="Hello" />
          <StyledTreeItem nodeId="7" label="Sub-subtree with children">
            <StyledTreeItem nodeId="9" label="Child 1" />
            <StyledTreeItem nodeId="10" label="Child 2" />
            <StyledTreeItem nodeId="11" label="Child 3" />
          </StyledTreeItem>
          <StyledTreeItem nodeId="8" label="Hello" />
        </StyledTreeItem>
        <StyledTreeItem nodeId="4" label="Other" />
        <StyledTreeItem nodeId="5" label="Something something" />
      </StyledTreeItem>
    </TreeView>
  )
}

export default CustomizedTreeView
