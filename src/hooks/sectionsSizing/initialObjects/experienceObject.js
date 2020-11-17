import { config } from "../../../config"

/**
 * useExperienceSizing's initial object
 */
export const initialState = {
  selfOffset: config.sizesInitComputing.experienceInitOffset,
  pages: config.sizesInitComputing.pagesInitValue,
  skillsOffset: config.sizesInitComputing.projectsInitOffset,
  projectsOffset: config.sizesInitComputing.projectsInitOffset,
  contactOffset: config.sizesInitComputing.contactInitOffset,
}