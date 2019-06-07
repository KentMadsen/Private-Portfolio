var buffer_json = null;

var application = new Vue
(
  {
    el:'#application-framework',

    data:
    {

      listed_post_summaries:
      [
        {
          identity: 1,

          registered:'6 days ago',
          title:'Search Engine Optimising Project',
          summary:"Et projekt hvor at jeg skulle lave en hjemmeside, som var SEO optimiseret. En process der gør det nemmere for søgemaskiner at læse og indeksere indholdet på hjemmesiden.",
          uri:'https://github.com/KentMadsen/EASV-SEO-Website',
          uri_content:'<i class="fab fa-github"></i>',

          resources:
          {
            

          }
        },

        {
          identity: 2,
          
          registered:'6 days ago',
          title:'Første Semester Eksamens Projekt',
          summary:'Et projekt til multimediadesigner ak, første semester eksamens projekt. Hvor at vi skulle lave en hjemmeside angående rummet til Illustreret Videnskab.',
          uri:'https://github.com/KentMadsen/EASV-Multimedia-1.-Semester-Project-Website',
          uri_content:'<i class="fab fa-github"></i>',
          
          resources:
          {

          }
        },

        {
          identity: 3,
          
          registered:'6 days ago',
          title:'Rybners Specialiseret studieprojekt',
          summary:'Et projekt til studieretningsprojektet på rybners htx, hvor at jeg skulle lave et program der kunne tekst klassifiere en bestemt stykke tekst ved hjælp af naive bayes.',
          uri:'https://github.com/KentMadsen/Rybners-SpecialisedStudyProject',
          uri_content:'<i class="fab fa-github"></i>',
          
          resources:
          {

          }
        }

      ],

      //
      navigation:
      {
        header:
        {
          menu:
          {
            main:
            [
              { 
                uri:"./index.php",
                name:"Kent Madsen",

                language:
                {
                  acronym:"en", 
                  name:"english"
                },

                title:""
              }

            ],

            secondary:
            [
              /*
              {
                uri:"./page.php",
                name:"About",

                language:
                { 
                  acronym:"en", 
                  name:"english"
                },

                title:""
              },*/
/*
              {
                uri:"./projects.php",
                name:"Projects",

                language:
                {
                  acronym:"en", 
                  name:"english"
                },

                title:""
              },*/

              /*{
                uri:"./gallery.php",
                name:"Gallery",

                language:
                {
                  acronym:"en", 
                  name:"english"
                },

                title:""
                
              }, */
            ]

          }

        },
      
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
