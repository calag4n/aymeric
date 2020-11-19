import WorkIcon from '@material-ui/icons/Work'
import SchoolIcon from '@material-ui/icons/School'

import {theme} from '../styles/theme'

import ensta from '../images/experience/ensta.png'
import tel from '../images/experience/telecom.png'
import ilb from '../images/experience/ilb.png'
import kcl from '../images/experience/kcl.png' 
import champo from '../images/experience/champo.png'

export const experiences = [

  {
    contentStyle: {},
    contentArrowStyle: {},
    date: 'Since September 2020',
    iconStyle: {background: theme.colors.primary, color: theme.colors.white },
    Icon: SchoolIcon,
    title: 'MSc Artificial Intelligence',
    subtitle: 'Telecom Paris',
    imageLink: 'https://www.telecom-paris.fr/en/post-masters-degree/all-post-masters-degree/artificial-intelligence',
    image: tel,
    imageAlt: `Telecom Paris logo`,
    description: `
Last year advanced specialization resulting from the partnership between Ensta Paris and Telecom Paris.

Coursework includes: *Deep Learning, Reinforcement Learning, Metaheuristic Optimization, Natural Language Processing, Statistical Learning, Multi-agent Programming, GPGPU Programming, Perception for autonomous systems, Large-scale statistical learning*.`,
  },
  {
    contentStyle: {},
    contentArrowStyle: {},
    date: 'March 2020 - August 2020',
    iconStyle: {background: theme.colors.secondary, color: theme.colors.white },
    Icon: WorkIcon,
    title: 'Research Assistant',
    subtitle: "King's College London",
    imageLink: 'https://www.kcl.ac.uk/psychology-systems-sciences/about/departments/biostatistics-and-health-informatics',
    image: kcl,
    imageAlt: `King's college London logo`,
    description: `
- Scrapped medical web data to create a *comprehensive disease database* and applied **classification and clustering techniques** on it.
- Built a simplified interface for doctors to generate randomized patients and test diagnostic tools.
- Worked on improving state-of-the-art medical annotation tool for drug/dosage NER.`,
  },
  {
    contentStyle: {},
    contentArrowStyle: {},
    date: 'Septembre 2019 - March 2020',
    iconStyle: {background: theme.colors.secondary, color: theme.colors.white },
    Icon: WorkIcon,
    title: 'Data Scientist',
    subtitle: 'Institut Louis Bachelier, Paris',
    imageLink: 'https://www.institutlouisbachelier.org/en/homepage/',
    image: ilb,
    imageAlt: 'Institut Louis Bachelier logo',
    description: `
- Researched *GAN applications* for financial time series
- **Prediction** of food insecurity due to droughts in Africa using **spatial and temporal data**
- Built a tool to complete missing values in industrial databases using **sequential models with customizable parameters**`,
  },
  {
    contentStyle: {},
    contentArrowStyle: {},
    date: 'May 2019 - August 2019',
    iconStyle: {background: theme.colors.secondary, color: theme.colors.white },
    Icon: WorkIcon,
    title: 'Research Intership',
    subtitle: "King's College London",
    imageLink: 'https://www.kcl.ac.uk/psychology-systems-sciences/about/departments/biostatistics-and-health-informatics',
    image: kcl,
    imageAlt: `King's college London logo`,
    description: `
- Improved Acute Kidney Injury diagnostic in Intensive Care Unit using **machine learning** (*structured and unstructured data*).
- Performed thorough *model analysis* and explanation using **Shapley values** and statistical tools.
- The whole pipeline was built in order to help improve physicians' diagnostics and is suitable for **real-time implementation**.
- Ongoing *research publication*.`,
  },
  {
    contentStyle: {},
    contentArrowStyle: {},
    date: '2017 - 2021',
    iconStyle: {background: theme.colors.primary, color: theme.colors.white },
    Icon: SchoolIcon,
    title: 'Msc Computer Science',
    subtitle: 'Ensta Paris',
    imageLink: 'https://www.ensta-paristech.fr/en/home',
    image: ensta,
    imageAlt: 'ENSTA logo',
    description: `
ENSTA Paris belongs to the **foremost graduate schools of engineering** in France called *"Grandes Ecoles"* and awards the french *"Diplôme d'Ingénieur"*.

Coursework includes core scientific training in:
- **Mechanics** (Solid, Fluid, Quantum)
- **Mathematics** (Statistics & Probability, Calculus, Geometry)
- **Computer Sciences** (Signal Processing, Software Engineering, Databases, Parallel Programming)
- **Biology** (introduction to Genetic and Immunology)`,
  },
  {
    contentStyle: {},
    contentArrowStyle: {},
    date: '2014 - 2017',
    iconStyle: {background: theme.colors.primary, color: theme.colors.white },
    Icon: SchoolIcon,
    title: 'Classe Préparatoire Aux Grandes Écoles',
    subtitle: 'Champollion, Grenoble',
    imageLink: 'https://en.wikipedia.org/wiki/Classe_pr%C3%A9paratoire_aux_grandes_%C3%A9coles',
    image: champo,
    imageAlt: 'Champollion logo',
    description: `
2 years of very demanding scientific courses with prior selection before competing in nationwide exams to enter **Top French Graduate Schools of Engineering**.
    
Ranked 303 (**top 5%** overall)`,
  },
]