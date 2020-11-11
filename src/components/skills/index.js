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
    '&.selected': {
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
      <StyledTreeItem nodeId="1" label="Datascience Skills">
        <StyledTreeItem nodeId="2" label="Programming">
          <StyledTreeItem odeId="9" label="Python" />
          <StyledTreeItem odeId="10" label="Java" />
          <StyledTreeItem odeId="11" label="C++" />
          <StyledTreeItem odeId="12" label="SQL" />
          <StyledTreeItem odeId="13" label="Javascript" />
          <StyledTreeItem odeId="14" label="Software Engineering" />
        </StyledTreeItem>

        <StyledTreeItem nodeId="3" label="Frameworks and Libraries">
          <StyledTreeItem nodeId="15" label="Pytorch" />
          <StyledTreeItem nodeId="16" label="Keras" />
          <StyledTreeItem nodeId="17" label="Scikit-Learn" />
          <StyledTreeItem nodeId="18" label="XGBoost" />
          <StyledTreeItem nodeId="19" label="Pandas" />
          <StyledTreeItem nodeId="20" label="Numpy" />
        </StyledTreeItem>

        <StyledTreeItem nodeId="4" label="Toolkit">
          <StyledTreeItem nodeId="21" label="Statistics for Machine learning" />
          <StyledTreeItem nodeId="22" label="Regularization" />
          <StyledTreeItem
            nodeId="23"
            label="Multiple Inputation by Chained Equations "
          />
          <StyledTreeItem
            nodeId="24"
            label="Synthetic Minority Oversampling Techniques"
          />
          <StyledTreeItem nodeId="25" label="Model Interpretability" />
          <StyledTreeItem nodeId="26" label="Feature Selection" />
          <StyledTreeItem nodeId="27" label="Metaheuristic Optimization" />
        </StyledTreeItem>

        <StyledTreeItem nodeId="5" label="Techniques">
          <StyledTreeItem nodeId="28" label="Convolutional Neural Networks" />
          <StyledTreeItem nodeId="29" label="Recurrent Neural Networks" />
          <StyledTreeItem nodeId="30" label="Multilayer Perceptron" />
          <StyledTreeItem nodeId="31" label="Natural Language Processing" />
          <StyledTreeItem nodeId="32" label="Reinforcement Learning" />
          <StyledTreeItem nodeId="33" label="Generative Adversarial Models" />
        </StyledTreeItem>

        <StyledTreeItem nodeId="6" label="Cloud Computing">
          <StyledTreeItem nodeId="34" label="Amazone Web Services" />
        </StyledTreeItem>

        <StyledTreeItem nodeId="7" label="Version Control">
          <StyledTreeItem nodeId="35" label="GIT" />
        </StyledTreeItem>

        <StyledTreeItem nodeId="8" label="Other">
          <StyledTreeItem nodeId="36" label="Linux OS" />
          <StyledTreeItem nodeId="37" label="Regex" />
          <StyledTreeItem nodeId="38" label="Web Scrapping" />
        </StyledTreeItem>
      </StyledTreeItem>
    </TreeView>
  )
}

export default CustomizedTreeView
