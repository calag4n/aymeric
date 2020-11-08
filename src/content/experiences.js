import WorkIcon from '@material-ui/icons/Work'
import SchoolIcon from '@material-ui/icons/School'

import {theme} from '../styles/theme'

import ensta from '../images/experience/ensta.png'
import tel from '../images/experience/telecom.png'
import ilb from '../images/experience/ilb.png'
import kcl from '../images/experience/kcl.png' 

export const experiences = [
  {
    contentStyle: {background: theme.colors.secondary, color: theme.colors.white },
    contentArrowStyle: { borderRight: `7px solid ${theme.colors.secondary}` },
    date: '2011 - present',
    iconStyle: {background: theme.colors.secondary, color: theme.colors.white },
    Icon: WorkIcon,
    title: 'Creative Director',
    location: 'Miami, FL',
    image: kcl,
    imageAlt: `King's college London logo`,
    description: `Creative Direction, User Experience, Visual Design, Project Management, Team Leading Creative Direction, User Experience, Visual Design, Project Management, Team Leading Creative Direction, User Experience, Visual Design, Project Management, Team Leading Creative Direction, User Experience, Visual Design, Project Management, Team Leading`,
  },
  {
    contentStyle: {},
    contentArrowStyle: {},
    date: '2010 - 2011',
    iconStyle: {background: theme.colors.secondary, color: theme.colors.white },
    Icon: WorkIcon,
    title: 'Art Director',
    location: 'San Francisco, CA',
    image: ensta,
    imageAlt: 'ENSTA logo',
    description: 'Creative Direction, User Experience, Visual Design, SEO, Online Marketing',
  },
  {
    contentStyle: {},
    contentArrowStyle: {},
    date: '2008 - 2010',
    iconStyle: {background: theme.colors.secondary, color: theme.colors.white },
    Icon: WorkIcon,
    title: 'Web Designer',
    location: 'Los Angeles, CA',
    image: tel,
    imageAlt: 'Telecom Paris logo',
    description: 'User Experience, Visual Design',
  },
  {
    contentStyle: {},
    contentArrowStyle: {},
    date: '2006 - 2008',
    iconStyle: {background: theme.colors.secondary, color: theme.colors.white },
    Icon: WorkIcon,
    title: 'Web Designer',
    location: 'San Francisco, CA',
    image: ilb,
    imageAlt: 'Institut Louis Bachelier logo',
    description: 'User Experience, Visual Design',
  },
  {
    contentStyle: {},
    contentArrowStyle: {},
    date: 'April 2013',
    iconStyle: {background: theme.colors.primary, color: theme.colors.white },
    Icon: SchoolIcon,
    title: 'Content Marketing for Web, Mobile and Social Media',
    location: 'Online Course',
    image: null,
    imageAlt: '',
    description: 'Strategy, Social Media',
  },
  {
    contentStyle: {},
    contentArrowStyle: {},
    date: 'November 2012',
    iconStyle: {background: theme.colors.primary, color: theme.colors.white },
    Icon: SchoolIcon,
    title: 'Agile Development Scrum Master',
    location: 'Certification',
    image: null,
    imageAlt: '',
    description: 'Creative Direction, User Experience, Visual Design',
  },
]