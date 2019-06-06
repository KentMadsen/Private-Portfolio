var footerArea = new Vue
(
  {
    el:'#footer-area',

    data:
    {

      listed_post_summaries:
      [

      ],

      //
      navigation:
      {
        footer:
        {
          content:
          {
            bag_of_tags:
            [

            ],

            social_media:
            [
              {
                uri:"https://github.com/KentMadsen",

                language:
                {
                  acronym:"en",
                  name:"english"
                },

                show: '<i class="fab fa-github"></i>',
                
                title: ''
              },

              {
                uri:"https://www.deviantart.com/designermadsen/",

                language:
                {
                  acronym:"en",
                  name:"english"
                },

                show: '<i class="fab fa-deviantart"></i>',
                
                title: ''
              },

              {
                uri:"https://www.linkedin.com/company/designermadsen",

                language:
                {
                  acronym:"en",
                  name:"english"
                },

                show: '<i class="fab fa-linkedin"></i>',
                
                title: ''
              },
              
              {
                uri:"https://medium.com/@DesignerMadsen",

                language:
                {
                  acronym:"en",
                  name:"english"
                },

                show: '<i class="fab fa-medium"></i>',
                
                title: ''
              },

              {
                uri:"https://www.behance.net/designermadsen",

                language:
                {
                  acronym:"en",
                  name:"english"
                },

                show: '<i class="fab fa-behance"></i>',
                
                title: ''
              },

              {
                uri:"https://twitter.com/designermadsen",

                language:
                {
                  acronym:"en",
                  name:"english"
                },

                show: '<i class="fab fa-twitter"></i>',
                
                title: ''
              },

              {
                uri:"https://www.facebook.com/DesignerMadsen-585524325269884",

                language:
                {
                  acronym:"en",
                  name:"english"
                },

                show: '<i class="fab fa-facebook"></i>',
                
                title: ''
              }

            ],

            miscellaneous:
            [
              {
                type:0,

                content:"Copyright 2019 Kent vejrup Madsen",

                uri:"None",

                language:
                {
                  acronym:"en",
                  name:"english"
                },

                title:"None"
              },

              {
                type:1,

                content:"Data & Cookie Privacy",

                uri:"",

                language:
                {
                  acronym:"en",
                  name:"english"
                },

                title:"None"
              },

              {
                type:1,
                content:"GDPR",

                uri:"./page.php",

                language:
                {
                  acronym:"en",
                  name:"english"
                },

                title:"None"
              },

              {
                type:1,
                content:"Terms of Service",

                uri:"./page.php",

                language:
                {
                  acronym:"en",
                  name:"english"
                },
                title:"None"
              },

              {
                type:1,
                content:"Backend login",

                uri:"https://journal.designermadsen.com/wp-login.php",

                language:
                {
                  acronym:"en",
                  name:"english"
                },
                title:"None"
              }
            ]

          }

          
        }

      },

    },

    watch:
    {

    },

    methods:
    {

    },

    mounted: function()
    {
      

    }

  }
);
