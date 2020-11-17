
export const config = {
      // ----- Skills Sizing -----
    /**
     * lines represent how many lines contain each expendable item.
     */
    lines: [null, 0, 6, 6, 9, 6, 1, 1, 3],
    multiplier: 0.05,

    // ----- Sections Initial values -----

    /**
     * ***** DESKTOP (default) *****
     */
    pagesValue: null, // if null it will return contactOffset + 1
    // homeOffset: 0,
    // aboutOffset: 1,
    // experienceOffset: 3,
    // skillsOffset: 4.9,
    // projectsOffset: 5.6,
    // contactOffset: 6.9,
    homeOffset: 0,
    aboutOffset: 1,
    experienceOffset: 3.5,
    skillsOffset: 5.55,
    projectsOffset: 5.6,
    contactOffset: 6.2,
    starsFactor: null, // if null it will return pagesValue - 1

    mobile: {
      pagesValue: null, // if null it will return contactOffset + 1
      homeOffset: 0,
      aboutOffset: 1,
      experienceOffset: 3,
      skillsOffset: 4.3,
      projectsOffset: 4.9,
      contactOffset: 6.2,
    },
  }
