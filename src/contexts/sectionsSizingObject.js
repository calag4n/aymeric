import { config } from "../config"

/**
 * sizingsContext's initial object
 */
export const initialState = {
  pagesValue: config.sizesInitComputing.pagesInitValue,
  homeOffset: config.sizesInitComputing.homeInitOffset,
  aboutOffset: config.sizesInitComputing.aboutInitOffset,
  experienceOffset: config.sizesInitComputing.experienceInitOffset,
  skillsOffset: config.sizesInitComputing.skillsInitOffset,
  projectsOffset: config.sizesInitComputing.projectsInitOffset,
  contactOffset: config.sizesInitComputing.contactInitOffset,
}