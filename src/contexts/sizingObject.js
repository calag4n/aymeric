import { config } from "../config"

/**
 * sizingsContext initial object
 */
export const initialState = {
  activeView: [],
  pages: config.skillsViewComputing.pagesInitialValue,
  projectsOffset: config.skillsViewComputing.projectsInitialOffset,
  contactOffset: config.skillsViewComputing.contactInitialOffset,
}