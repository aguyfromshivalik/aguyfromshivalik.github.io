// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-contact",
          title: "Contact",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/contact/";
          },
        },{id: "nav-news",
          title: "News",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/information/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-research",
          title: "Research",
          description: "Reaction dynamics, potential energy surfaces, and a bit of machine learning.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-memories",
          title: "Memories",
          description: "Places and people along the way.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/memories/";
          },
        },{id: "nav-others",
          title: "Others",
          description: "Life outside of the lab",
          section: "Navigation",
          handler: () => {
            window.location.href = "/others/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-i-have-successfully-defended-my-phd-thesis-slides",
          title: 'I have successfully defended my PhD thesis ( Slides ). 🥳',
          description: "",
          section: "News",},{id: "news-i-am-starting-my-postdoc-at-disc-in-unipd-italy",
          title: 'I am starting my postdoc at   DiSC  in  UNiPD, Italy. 🚀',
          description: "",
          section: "News",},{id: "news-accepted-in-jcp-h-lihe-lih-he-dynamics-sparkles",
          title: 'Accepted in JCP: H + LiHe+ → LiH+ + He dynamics. :sparkles:',
          description: "",
          section: "News",},{id: "news-paper-live-in-jcp-h-lihe-reaction-dynamics",
          title: 'Paper live in JCP: H + LiHe+ reaction dynamics.',
          description: "",
          section: "News",},{id: "news-pes-trotter-is-live-in-journal-of-computational-chemistry-sparkles",
          title: 'PES-trotter is live in Journal of Computational Chemistry. :sparkles:',
          description: "",
          section: "News",},{id: "news-preprint-on-research-square-jacobi-legendre-pes-fitting-for-triatomics",
          title: 'Preprint on Research Square: Jacobi–Legendre PES fitting for triatomics.',
          description: "",
          section: "News",},{id: "news-paper-live-in-jcp-he-lih-ro-vibrational-excitation-dynamics-sparkles",
          title: 'Paper live in JCP: He + LiH+ ro-vibrational excitation dynamics. :sparkles:',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{id: "quotes-quote-1",
          title: 'Quote_1',
          description: "",
          section: "Quotes",handler: () => {
              window.location.href = "/quotes/quote_1/";
            },},{id: "shelf-1984",
          title: '1984',
          description: "",
          section: "Shelf",handler: () => {
              window.location.href = "/shelf/1984/";
            },},{id: "shelf-a-man-called-ove",
          title: 'A Man Called Ove',
          description: "",
          section: "Shelf",handler: () => {
              window.location.href = "/shelf/a-man-called-ove/";
            },},{id: "shelf-animal-farm",
          title: 'Animal Farm',
          description: "",
          section: "Shelf",handler: () => {
              window.location.href = "/shelf/animal-farm/";
            },},{id: "shelf-banaras-city-of-light",
          title: 'Banaras: City of Light',
          description: "",
          section: "Shelf",handler: () => {
              window.location.href = "/shelf/banaras/";
            },},{id: "shelf-blink",
          title: 'Blink',
          description: "",
          section: "Shelf",handler: () => {
              window.location.href = "/shelf/blink/";
            },},{id: "shelf-curfewed-night",
          title: 'Curfewed Night',
          description: "",
          section: "Shelf",handler: () => {
              window.location.href = "/shelf/curfewed-night/";
            },},{id: "shelf-dastan-e-himalaya-vol-1",
          title: 'Dastan-e Himalaya, Vol. 1',
          description: "",
          section: "Shelf",handler: () => {
              window.location.href = "/shelf/dastan-e-himalaya/";
            },},{id: "shelf-gone-girl",
          title: 'Gone Girl',
          description: "",
          section: "Shelf",handler: () => {
              window.location.href = "/shelf/gone-girl/";
            },},{id: "shelf-how-much-land-does-a-man-need",
          title: 'How Much Land Does a Man Need?',
          description: "",
          section: "Shelf",handler: () => {
              window.location.href = "/shelf/how-much-land-does-a-man-need/";
            },},{id: "shelf-into-the-wild",
          title: 'Into the Wild',
          description: "",
          section: "Shelf",handler: () => {
              window.location.href = "/shelf/into-the-wild/";
            },},{id: "shelf-my-favourite-nature-stories",
          title: 'My Favourite Nature Stories',
          description: "",
          section: "Shelf",handler: () => {
              window.location.href = "/shelf/my-favourite-nature-stories/";
            },},{id: "shelf-norwegian-wood",
          title: 'Norwegian Wood',
          description: "",
          section: "Shelf",handler: () => {
              window.location.href = "/shelf/norwegian-wood/";
            },},{id: "shelf-one-hundred-years-of-solitude",
          title: 'One Hundred Years of Solitude',
          description: "",
          section: "Shelf",handler: () => {
              window.location.href = "/shelf/one-hundred-years-of-solitude/";
            },},{id: "shelf-one-part-woman",
          title: 'One Part Woman',
          description: "",
          section: "Shelf",handler: () => {
              window.location.href = "/shelf/one-part-woman/";
            },},{id: "shelf-pride-and-prejudice",
          title: 'Pride and Prejudice',
          description: "",
          section: "Shelf",handler: () => {
              window.location.href = "/shelf/pride-and-prejudice/";
            },},{id: "shelf-siddhartha",
          title: 'Siddhartha',
          description: "",
          section: "Shelf",handler: () => {
              window.location.href = "/shelf/siddhartha/";
            },},{id: "shelf-srikanta",
          title: 'Srikanta',
          description: "",
          section: "Shelf",handler: () => {
              window.location.href = "/shelf/srikanta/";
            },},{id: "shelf-the-catcher-in-the-rye",
          title: 'The Catcher in the Rye',
          description: "",
          section: "Shelf",handler: () => {
              window.location.href = "/shelf/the-catcher-in-the-rye/";
            },},{id: "shelf-the-kite-runner",
          title: 'The Kite Runner',
          description: "",
          section: "Shelf",handler: () => {
              window.location.href = "/shelf/the-kite-runner/";
            },},{id: "shelf-the-myth-of-normal",
          title: 'The Myth of Normal',
          description: "",
          section: "Shelf",handler: () => {
              window.location.href = "/shelf/the-myth-of-normal/";
            },},{id: "shelf-the-old-man-and-the-sea",
          title: 'The Old Man and the Sea',
          description: "",
          section: "Shelf",handler: () => {
              window.location.href = "/shelf/the-old-man-and-the-sea/";
            },},{id: "shelf-the-picture-of-dorian-gray",
          title: 'The Picture of Dorian Gray',
          description: "",
          section: "Shelf",handler: () => {
              window.location.href = "/shelf/the-picture-of-dorian-gray/";
            },},{id: "shelf-the-prophet",
          title: 'The Prophet',
          description: "",
          section: "Shelf",handler: () => {
              window.location.href = "/shelf/the-prophet/";
            },},{id: "shelf-the-stranger",
          title: 'The Stranger',
          description: "",
          section: "Shelf",handler: () => {
              window.location.href = "/shelf/the-stranger/";
            },},{id: "shelf-things-fall-apart",
          title: 'Things Fall Apart',
          description: "",
          section: "Shelf",handler: () => {
              window.location.href = "/shelf/things-fall-apart/";
            },},{id: "shelf-to-kill-a-mockingbird",
          title: 'To Kill a Mockingbird',
          description: "",
          section: "Shelf",handler: () => {
              window.location.href = "/shelf/to-kill-a-mockingbird/";
            },},{id: "shelf-train-to-pakistan",
          title: 'Train to Pakistan',
          description: "",
          section: "Shelf",handler: () => {
              window.location.href = "/shelf/train-to-pakistan/";
            },},{id: "shelf-turtles-all-the-way-down",
          title: 'Turtles All the Way Down',
          description: "",
          section: "Shelf",handler: () => {
              window.location.href = "/shelf/turtles-all-the-way-down/";
            },},{id: "shelf-white-nights",
          title: 'White Nights',
          description: "",
          section: "Shelf",handler: () => {
              window.location.href = "/shelf/white-nights/";
            },},{
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
