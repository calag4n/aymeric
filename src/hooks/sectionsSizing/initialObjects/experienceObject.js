import { config } from "../../../config"

/**
 * useExperienceSizing's initial object
 */
export const initialState = {
  selfOffset: 100,
  pages: config.sizesInitComputing.pagesInitValue,
  skillsOffset: config.sizesInitComputing.projectsInitOffset,
  projectsOffset: config.sizesInitComputing.projectsInitOffset,
  contactOffset: config.sizesInitComputing.contactInitOffset,
}