import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '@material-ui/core/SvgIcon';
import { fade, makeStyles, withStyles, createMuiTheme } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import Collapse from '@material-ui/core/Collapse';
import { useSpring, animated } from 'react-spring/web.cjs'; // web.cjs is required for IE 11 support



function MinusSquare(props) {
  return (
    <SvgIcon fontSize="inherit" style={{ width: 14, height: 14 }} {...props}>
      {/* tslint:disable-next-line: max-line-length */}
      <path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 11.023h-11.826q-.375 0-.669.281t-.294.682v0q0 .401.294 .682t.669.281h11.826q.375 0 .669-.281t.294-.682v0q0-.401-.294-.682t-.669-.281z" />
    </SvgIcon>
  );
}

function PlusSquare(props) {
  return (
    <SvgIcon fontSize="inherit" style={{ width: 14, height: 14 }} {...props}>
      {/* tslint:disable-next-line: max-line-length */}
      <path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 12.977h-4.923v4.896q0 .401-.281.682t-.682.281v0q-.375 0-.669-.281t-.294-.682v-4.896h-4.923q-.401 0-.682-.294t-.281-.669v0q0-.401.281-.682t.682-.281h4.923v-4.896q0-.401.294-.682t.669-.281v0q.401 0 .682.281t.281.682v4.896h4.923q.401 0 .682.281t.281.682v0q0 .375-.281.669t-.682.294z" />
    </SvgIcon>
  );
}

function CloseSquare(props) {
  return (
    <SvgIcon className="close" fontSize="inherit" style={{ width: 14, height: 14 }} {...props}>
      {/* tslint:disable-next-line: max-line-length */}
      <path d="M17.485 17.512q-.281.281-.682.281t-.696-.268l-4.12-4.147-4.12 4.147q-.294.268-.696.268t-.682-.281-.281-.682.294-.669l4.12-4.147-4.12-4.147q-.294-.268-.294-.669t.281-.682.682-.281.696 .268l4.12 4.147 4.12-4.147q.294-.268.696-.268t.682.281 .281.669-.294.682l-4.12 4.147 4.12 4.147q.294.268 .294.669t-.281.682zM22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0z" />
    </SvgIcon>
  );
}

function TransitionComponent(props) {
  const style = useSpring({
    from: { opacity: 0, transform: 'translate3d(20px,0,0)', color:'white'},
    to: { opacity: props.in ? 1 : 0, transform: `translate3d(${props.in ? 0 : 20}px,0,0)`,color:'white' },
  });

  return (
    <animated.div style={style}>
      <Collapse {...props} />
    </animated.div>
  );
}

TransitionComponent.propTypes = {
  /**
   * Show the component; triggers the enter or exit states
   */
  in: PropTypes.bool,
};



const StyledTreeItem = withStyles((theme) => ({

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

  label : {
    fontSize: '30px',
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
}))((props) => <TreeItem {...props} TransitionComponent={TransitionComponent} />);

const useStyles = makeStyles({
  root: {
    "&$selected": {
      backgroundColor: "red",
      "&:hover": {
        backgroundColor: "red",
      },
    },

    margin: 'auto',
    color:'#f50057',
    height: 2000,
    flexGrow: 1,
    maxWidth: 600,
  },
});


export default function CustomizedTreeView() {
  const classes = useStyles();

  return (
    <TreeView
      className={classes.root}
      defaultExpanded={['0']}
      defaultCollapseIcon={<MinusSquare />}
      defaultExpandIcon={<PlusSquare />}
      defaultEndIcon={<CloseSquare />}
    >
      <StyledTreeItem nodeId="1" label="Datascience Skills">

        <StyledTreeItem nodeId="2" label="Programming" >

          <StyledTreeItem odeId="9" label="Python"/>
          <StyledTreeItem odeId="10" label="Java"/>
          <StyledTreeItem odeId="11" label="C++"/>
          <StyledTreeItem odeId="12" label="SQL"/>
          <StyledTreeItem odeId="13" label="Javascript"/>
          <StyledTreeItem odeId="14" label="Software Engineering"/>

        </StyledTreeItem>

        <StyledTreeItem nodeId="3" label="Frameworks and Libraries">

          <StyledTreeItem nodeId="15" label="Pytorch" />
          <StyledTreeItem nodeId="16" label="Keras"/>
          <StyledTreeItem nodeId="17" label="Scikit-Learn" />
          <StyledTreeItem nodeId="18" label="XGBoost" />
          <StyledTreeItem nodeId="19" label="Pandas" />
          <StyledTreeItem nodeId="20" label="Numpy" />

        </StyledTreeItem>

        <StyledTreeItem nodeId="4" label="Toolkit">

          <StyledTreeItem nodeId="21" label="Statistics for Machine learning" />
          <StyledTreeItem nodeId="22" label="Regularization"/>
          <StyledTreeItem nodeId="23" label="Multiple Inputation by Chained Equations " />
          <StyledTreeItem nodeId="24" label="Synthetic Minority Oversampling Techniques" />
          <StyledTreeItem nodeId="25" label="Model Interpretability" />
          <StyledTreeItem nodeId="26" label="Feature Selection" />
          <StyledTreeItem nodeId="27" label="Metaheuristic Optimization" />


          
        </StyledTreeItem>

        <StyledTreeItem nodeId="5" label="Techniques">

          <StyledTreeItem nodeId="28" label="Convolutional Neural Networks" />
          <StyledTreeItem nodeId="29" label="Recurrent Neural Networks"/>
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
  );
}
