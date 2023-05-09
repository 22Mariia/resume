// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()
// ===============================================================

var header = {
  name: {
    firstname: 'Ivan',
    lastname: 'Ivanov',
  },
  position: 'Junior Fullstack JS Developer',

  salary: '600$ в місяц',
  adress: 'Ukraine, Kyiv',
}

var footer = {
   
  social: {
    email: {
      text: 'ivanov@mail.com',
      href: 'mailto:dmytro@mail.com',
    },
    phone:{
      text:'+380670000123',
      href:'tel:+380670000123',
    },
    linkedin: {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/dmytro-test',
    },
  },
 }

// ================================================================
 // router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані
page: {
  title: 'Resume | Summary',
},


    header,
   
    main: {
      summery: {
        title: 'Summary',
        text: `Open-minded for new technologies, with 1 years of experience in development. Whenever I start to
        work on a new project I learn the domain and try to understand the idea of the project. Good team
        player, every colleague is a friend to me.`,
      },
  
      experience: {
        title: 'Other experience',
        text: `Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (
          tournament position, goals etc), analyzing by simple mathematics models and preparing probability
          for such events like: money line - first win / draw / second win, totals etc.`,
      },

    },
 footer,
  })
})

// ==============================================================

//              ↙ тут вводимо шлях (PATH) до сторінки

  router.get('/skills', function (req, res) {
    // res.render генерує нам HTML сторінку
  
    //            ↙ cюди вводимо назву файлу з сontainer
    res.render('skills', {
      page: {
        title: 'Resume | Skills',
      },
          header,
         
          main: {
      
            skills: [ 

              {
                name: 'HTML',
                point: 10,
                isTop: true,
              },
              {
                name: 'Handelbars',
                point: 10,
                isTop: true,
              },
              {
                name: 'VS Code',
                point: 8,
                isTop: false,
              },
              {
                name:  'Git',
                point: 9,
                isTop:false,
              },
              {
                name: 'Terminal', 
                point: 6,
                isTop: false,
              },
              {
                name: 'NPM',
                point: 7,
              },
              {
                name: 'React.js',
                point: 0,
              },
              {
                name: 'PHP',
                point: null,
              },
                                  
             ],
             hobbies: [
              {
            name: 'програмування',
            isMain: true,
              },
              {
                name: 'встановлення програм',
                isMain: true,
              },
              {
                 name: 'створення ігор',
                 isMain: false,
               },
             ]
          },
       footer,
      
        })
      })
  
router.get('/education', function (req, res) {
  
  res.render('education', {
    page: {
      title: 'Resume | Education',
    },
        header,
       
        main: {  
          education: [

            {
             name: 'University of Cambridge',
             isEnd: true,
            },
            {
              name: 'Canterbury Christ Church University',
              isEnd: false,
             },
             {
              name: 'Cardiff Metropolitan University', 
              isEnd: true,
             },
             {
              name: 'Anglia Ruskin University',
              isEnd: false,
             },
             {
              name: 'Aston University',
              isEnd: false,
             },
             ],

             certificates: [
              {
                name: 'Figma, UI/UX',
                id: 125,
              },
              {
                name: 'HTML',
                id: 625,
              },
              {
                name: 'CSSL',
                id: 785,
              },
                
             ]        },
     footer,
    
      })
    })

    router.get('/work', function (req, res) {
  
      res.render('work', {

        layout: 'big',

                page: {
          title: 'Resume | Work',
        },
            header,
           
            main: {
              workі: [
                {
                  position: 'Junior Fullsteck Developer',
                  company: {
                    name: 'IT Brains',
                    url: null,
                  },
                  duration: {
                    from: '10.10.2022',
                    to: null,
                  },
                  projectAmount: 3,

                  projects: [{
                    name: 'Resume',
                    url: 'https://resume.com.ua/',
                    about: 'High-load aplication',
                    stackAmount: 3,
                    awarfdAmount: 2,
                    stacks: [
                    {
                      name: 'React.js',
                    },
                    {
                      name: 'HTML / CSS',
                    },
                    {
                      name: 'Nodejs',
                    },
                    ],
                    awards: [
                      {
                        name: 'Background verefication - is a feature that provides users to prove that they are real persons',
                      },
                      {
                        name: 'Preparing Seo optimized pages.',
                      },

                    ]
                  },

                  ]
                },
              ],
            },

         footer,
        
          })
        })
 
              router.get('/person', function (req, res) {
          //             ↙ cюди вводимо назву файлу з сontainer
          res.render('person', {
            layout: 'person',

            person: {
              name: 'Emma Johnson',
              age: 32,
              gender: 'Female',
              address: {
                street: '123 Main St',
                city: 'New York',
                state: 'NY',
                zip: '10001',
                country: 'USA',
              },
              education: [
                {
                  degree: 'Bachelor of Science',
                  major: 'Computer Science',
                  university:
                    'Massachusetts Institute of Technology',
                  graduationYear: 2012,
                },
              ],
              workExperience: [
                {
                  company: 'Google',
                  title: 'Software Engineer',
                  startDate: '2012-06-01',
                  endDate: '2016-12-31',
                  responsibilities: [
                    'Developed new features for Google Maps',
                    'Worked on improving search algorithms',
                  ],
                  year_founded: 1990,
                  industry: 'Technology',
                  employees: [
                    {
                      name: 'John Smith',
                      position: 'CEO',
                      department: 'Executive',
                      projects: [
                        {
                          name: 'Project Alpha',
                          description:
                            'Developing new software platform',
                          status: 'In Progress',
                          teams: [
                            {
                              team_name: 'Awesome Team',
                              team_leader: {
                                name: 'John Smith',
                                title: 'Team Leader',
                                email: 'john.smith@example.com',
                              },
                              team_members: [
                                {
                                  name: 'Alice Johnson',
                                  title: 'Software Engineer',
                                  email:
                                    'alice.johnson@example.com',
                                  skills: ['Java', 'Python', 'SQL'],
                                  projects: [
                                    {
                                      name: 'Project A',
                                      description:
                                        'Lorem ipsum dolor sit amet',
                                      technologies: [
                                        'Java',
                                        'Spring Framework',
                                      ],
                                      team_members: [
                                        {
                                          name: 'Bob Lee',
                                          title:
                                            'Software Engineer',
                                        },
                                        {
                                          name: 'Cindy Chen',
                                          title: 'UI Designer',
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],

            },
          })
        })
        router.get('/program', function (req, res) {
          //             ↙ cюди вводимо назву файлу з сontainer
          res.render('program', {
            layout: "program",
            program: {
              excursion: {
                name: 'Cultural Tour',
                location: {
                  city: 'Paris',
                  country: 'France',
                },
                date: '2023-06-15',
                program: [
                  {
                    name: 'Museum Visit',
                    type: 'Art',
                    duration: 3,
                    details: {
                      museum: {
                        name: 'The Louvre',
                        location: {
                          address: 'Rue de Rivoli',
                          city: 'Paris',
                          country: 'France',
                        },
                        exhibits: [
                          {
                            name: 'Mona Lisa',
                            artist: 'Leonardo da Vinci',
                            description: 'Iconic portrait painting',
                            audio_guide: true,
                          },
                          {
                            name: 'Winged Victory of Samothrace',
                            artist: null,
                            description:
                              'Ancient Greek statue of Nike, the goddess of victory',
                            audio_guide: true,
                          },
                        ],
                      },
                      guide: {
                        name: 'Francois',
                        language: 'French',
                        rating: 4.8,
                      },
                    },
                  },
                  {
                    name: 'Cultural Show',
                    type: 'Music and Dance',
                    duration: 2,
                    details: {
                      venue: {
                        name: 'Moulin Rouge',
                        location: {
                          address: '82 Boulevard de Clichy',
                          city: 'Paris',
                          country: 'France',
                        },
                      },
                      performers: [
                        {
                          name: 'Mireille Mathieu',
                          type: 'Chanson singer',
                        },
                        {
                          name: "Ballet de l'Opéra National de Paris",
                          type: 'Classical ballet company',
                        },
                      ],
                      guide: {
                        name: 'Sophie',
                        language: 'English',
                        rating: 4.6,
                      },
                    },
                  },
                ],
              },
            },
          })
        })
        
        // ================================================================

        router.get('/task21', function (req, res) {
          // res.render генерує нам HTML сторінку
        
          //            ↙ cюди вводимо назву файлу з сontainer
          res.render('task21', {
            layout: "basic",
            heading: {
              main: {
                title: 'JavaScript',
                text: 'JavaScript is a popular high-level, dynamic, and interpreted programming language.',
                button_text: {
                  solid: 'Open page',
                  outline: 'Add to cart',
                },
              },
              second: {
                title: 'Stack Overflow',
                text: 'First-class functions',
                button_text: {
                  solid: 'Open page',
                  outline: 'Add to cart',
                },
              },
              subblock: {
                title: 'JavaScript Weekly',
                text: 'Prototype-based inheritance newsletter',
                button_text: {
                  solid: 'Open page',
                  outline: 'Add to cart',
                },
              },
            },
            nested_display: {
              title: 'HTML',
              children_display: {
                title: 'Outdated HTML tags',
                text: 'tags that have been identified as deprecated and not recommended for use in HTML version 5',
                button: {
                  text: 'Орen',
                },
              },
              header_text: 'Sections',
              button: {
                text: 'Learn more',
              },
            },
            paragraph: {
              title: 'About modules',
              text: 'Modules with import/export statements',
        
              button: {
                text: 'Open link page',
                url: 'https://google.com',
              },
              list_name: [
                {
                  text: 'Github',
                  url: 'https://github.com/',
                },
                {
                  text: 'Bootstrap',
                  url: 'https://getbootstrap.com/',
                },
              ],
            },
          })
          //                  ↑↑ сюди вводимо JSON дані
        })
        

              

  //                  ↑↑ сюди вводимо JSON дані


// Підключаємо роутер до бек-енду
module.exports = router
