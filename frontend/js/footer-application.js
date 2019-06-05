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
