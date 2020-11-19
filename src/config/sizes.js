export const config = {
      // ----- SKILLS SIZING -----
    /**
     * Lines represent how many lines contain each expendable item.
     * TreeItems's Ids begin from 1 so 0 isn't used
     * In here we don't want to change size when the first item 
     *   is expanded so we affect it 0.
     */
    lines: [null, 0, 6, 6, 9, 6, 1, 1, 3],
    // With the actual font-size, 0.05 is a good multiplier
    multiplier: 0.05,

    // ----- SECTIONS INITIAL VALUES -----
    /**
     * Since the actual Parallax API we do use is not really matching
     *   our project purposes, we have to provide many parameters.
     * TODO: Find another Parallax API more covenient or build one.
     */
    // desktop >= 1100px
    desktop: {
      pagesValue: null, // if null it will return contactOffset + 1
      homeOffset: 0,
      aboutOffset: 1,
      experienceOffset: 3,
      skillsOffset: 4.9,
      projectsOffset: 5.6,
      contactOffset: 6.9,
      starsFactor: null, // if null it will return pagesValue - 1
    },
    // 700px <= tablet < 1100px
    tablet:{
      pagesValue: null,
      homeOffset: 0,
      aboutOffset: 1,
      experienceOffset: 3,
      skillsOffset: 4.8,
      projectsOffset: 5.8,
      contactOffset: 7.2,
      starsFactor: null,
    },
    // 530px <= bigPhone < 700px
    bigPhone: {
      pagesValue: null,
      homeOffset: 0,
      aboutOffset: 1,
      experienceOffset: 2.8,
      skillsOffset: 4.4,
      projectsOffset: 5.5,
      contactOffset: 7.2,
      starsFactor: null,
    },
    // smallPhone < 530px
    smallPhone: {
      pagesValue: null,
      homeOffset: 0,
      aboutOffset: 1,
      experienceOffset: 3.2,
      skillsOffset: 5.4,
      projectsOffset: 7.2,
      contactOffset: 10.1,
      starsFactor: null,
    },

  }
