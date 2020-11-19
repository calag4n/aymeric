import { config } from '../config/sizes'

/**
 * sizingsContext's initial object
 */
const state = () => {

  const {
    desktop: {
      pagesValue,
      homeOffset,
      aboutOffset,
      experienceOffset,
      skillsOffset,
      projectsOffset,
      contactOffset,
      starsFactor,
    },
  } = config

  return {
    pagesValue: pagesValue || contactOffset + 1,
    homeOffset,
    aboutOffset,
    experienceOffset,
    skillsOffset,
    projectsOffset,
    contactOffset,
    starsFactor: starsFactor || contactOffset,
  }
}

export const initialState = state()
