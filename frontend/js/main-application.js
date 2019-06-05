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

      projects:
      {
        keywords:
        [

        ]
      },

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
                uri:"./about.php",
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

        }

      },

    },

    watch:
    {

    },

    methods:
    {

      parse_projects : function( event )
      {
        var i = 0;

        for( i = 0;
             i < event.data.length;
             i ++ )
        {
          var obj = event.data[i];

          var a = new SummaryPost();

          a.setLink( obj.link );
          a.setRegistered( obj.date );

          a.setTitle( obj.title[ variable_render ] );
          a.setSummary( obj.excerpt[ variable_render ] );

          this.listed_post_summaries.push( a );
        }

      },


      clickEvenFilterTag : function ( event )
      {
        var target = event.target;

        var children = target.childNodes;

        var i = 0;

        for( i = 0;
             i < children.length;
             i++ )
        {
          
        }

      },

    },

    mounted: function()
    {
      

    }

  }
);
