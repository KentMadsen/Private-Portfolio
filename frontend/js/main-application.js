var buffer_json = null;

var application = new Vue
(
  {
    el:'#application-framework',

    data:
    {

      listed_post_summaries:
      [

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
              
              {
                uri:"./page.php",
                name:"About",

                language:
                { 
                  acronym:"en", 
                  name:"english"
                },

                title:""
              },

              {
                uri:"./projects.php",
                name:"Projects",

                language:
                {
                  acronym:"en", 
                  name:"english"
                },

                title:""
              },

              {
                uri:"./gallery.php",
                name:"Gallery",

                language:
                {
                  acronym:"en", 
                  name:"english"
                },

                title:""
                
              },
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
