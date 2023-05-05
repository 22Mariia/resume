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
        
        // ================================================================
              
  //                  ↑↑ сюди вводимо JSON дані


// Підключаємо роутер до бек-енду
module.exports = router
