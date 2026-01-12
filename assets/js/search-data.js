// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "publications in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A collection of my course and personal projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "news-successfully-passed-my-phd-qualifying-exam",
          title: 'Successfully passed my PhD Qualifying Exam ✅',
          description: "",
          section: "News",},{id: "news-our-paper-was-accepted-to-icra-2025",
          title: 'Our paper was accepted to ICRA 2025 📝',
          description: "",
          section: "News",},{id: "news-earned-my-m-s-in-electrical-amp-amp-computer-engineering",
          title: 'Earned my M.S. in Electrical &amp;amp;amp; Computer Engineering 🎓',
          description: "",
          section: "News",},{id: "news-presenting-whole-body-mppi-at-icra-2025",
          title: 'Presenting Whole-Body MPPI at ICRA 2025 🎤',
          description: "",
          section: "News",},{id: "news-our-paper-was-accepted-to-iccv-2025",
          title: 'Our paper was accepted to ICCV 2025 📝',
          description: "",
          section: "News",},{id: "news-our-paper-was-accepted-to-humanoids-2025",
          title: 'Our paper was accepted to Humanoids 2025 📝',
          description: "",
          section: "News",},{id: "news-completed-my-summer-internship-at-csl-taipei-and-foxconn",
          title: 'Completed my summer internship at CSL@Taipei and Foxconn 🤖',
          description: "",
          section: "News",},{id: "news-presenting-linear-walking-at-humanoids-2025",
          title: 'Presenting Linear-Walking at Humanoids 2025 🎤',
          description: "",
          section: "News",},{id: "projects-whole-body-trajectory-optimization-and-tracking-for-a-ballbot",
          title: 'Whole-body Trajectory Optimization and Tracking for a Ballbot',
          description: "Optimizing and tracking whole-body trajectories for a ballbot equipped with arms. By using direct collocation and Time-Variant Linear Quadratic Regulators (TVLQR), the ballbot performs dynamic tasks such as navigating complex paths and pushing off walls, maintaining balance despite changes in its center of mass.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-on-orbit-optimal-kinodynamic-planning-for-low-thrust-trajectory-maneuvers",
          title: 'On-Orbit Optimal Kinodynamic Planning for Low-Thrust Trajectory Maneuvers',
          description: "Using RRT* with an LQR-based heuristic to efficiently design low-thrust spacecraft trajectories, addressing nonlinear dynamics and long-duration maneuvers.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6A%72%61%6C%76%61%72%65@%61%6E%64%72%65%77.%63%6D%75.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/jrapudg", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/juan-alvarez-padilla", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=5LY2KtEAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
