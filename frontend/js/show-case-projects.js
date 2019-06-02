function SummaryPost()
{
  this.registered = 'None';

  this.title = 'None';
  this.summary = 'None';
  this.tags = [null];

  this.link = '';
  this.language = '';

  this.getLink = function()
  {
    return this.link;
  };

  this.setLink = function( object )
  {
    this.link = object;
  };

  this.getLanguage = function()
  {
    return this.language;
  };

  this.setLanguage = function( object )
  {
    this.language = object;
  };

  this.getTags = function()
  {
    return this.tags;
  };

  this.setTags = function( object )
  {
    this.tags = object;
  };

  this.getSummary = function()
  {
    return this.summary;
  };

  this.setSummary = function( object )
  {
    this.summary = object;
  };

  this.getTitle = function()
  {
    return this.title;
  };

  this.setTitle = function( object )
  {
    this.title = object;
  };

  this.getRegistered = function()
  {
    return this.registered;
  };

  this.setRegistered = function( object )
  {
    this.registered = object;
  };


};

var variable_maximum_entities = "per_page";
var variable_current_page = "page";

var showcase = new Vue
(
  {
    el:'#showcase-projects',

    data:
      {

        listed_post_summaries:
        [

        ],

        listed_post_summaries_offline:
        [

        ],

        projects:
        {
          keywords:
          [
            {
              category : 1,
              tags:'All',
              isActive:true,
              identity:1
            },

           {
            category: 2,
            tags:'Website',
            isActive:false,
            identity:2
           },

           {
            category: 2,
            tags:'Application',
            isActive:false,
            identity:3
           },

           {
            category : 2,
            tags:'Database',
            isActive:false,
            identity:4
           }
        ]

      }


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
          console.log( obj );

          var a = new SummaryPost();
          a.setLink( obj.link );
          a.setRegistered( obj.date );
          a.setTitle( obj.title["rendered"] );
          a.setSummary( obj.excerpt["rendered"] );

          console.log( obj );

          this.listed_post_summaries.push( a );
        }

      },

      create_project_summary: function()
      {

      },

      clickEvenFilterTag : function ( event )
      {
        var target = event.target;

        //console.log(target);

        var children = target.childNodes;
        //console.log(children);

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

        axios
        .get('https://journal.designermadsen.com/wp-json/wp/v2/posts/?categories=20&per_page=3')
        .then( Response => ( this.parse_projects( Response )  ) );
    }

  }
);
