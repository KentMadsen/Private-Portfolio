var buffer_json = null;

var application = new Vue(
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
      mainNavigation:
      [
        {
          url:"./index.php",
          name:"Kent Madsen",
          language:"en"
        }

      ],

      //
      linkNavigation:
      [
        {
          url:"./about.php",
          name:"About",
          language:"en"
        },

        {
          url:"./contact.php",
          name:"Contact",
          language:"en"
        },

        {
          url:"./projects.php",
          name:"Projects",
          language:"en"
        },

        {
          url:"./gallery.php",
          name:"Gallery",
          language:"en"
        },

      ],

      fetched_post_data: null



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
          a.setTitle( obj.title["rendered"] );
          a.setSummary( obj.excerpt["rendered"] );

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
          console.log( children[i] );
        }

      },

    },

    mounted: function()
    {


    }

  }
);
