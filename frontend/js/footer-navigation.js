var buffer_json = null;

function createTag( entity )
{
  //console.log(entity);


  var entity_result = new EntityTag();

  entity_result.setLinks( entity.link );
  entity_result.setTag( entity.name );
  entity_result.setName( entity.slug );

  return entity_result;
}

function EntityTag()
{
  this.tag = '';
  this.name = '';
  this.link = '';

  this.getTag = function()
  {
    return this.tag;
  };


  this.getName = function()
  {
    return this.name;
  };

  this.getLink = function()
  {
    return this.link;
  };

  this.setTag = function( tag_value )
  {
    this.tag = tag_value;
  };

  this.setName = function( name_value )
  {
    this.name = name_value;
  };

  this.setLinks = function( links_value )
  {
    this.link= links_value;
  };

}

var footer_app = new Vue(
  {
    el:'#footer-navigation',

    data:
    {
      fetched_post_data: null,

      social_navigation:
      [
        {
          link:'https://www.facebook.com/DesignerMadsen-585524325269884',
          language:'en',
          source:1,
          type:'facebook'
        },

        {
          link:'https://twitter.com/designermadsen',
          language:'en',
          source:2,
          type:'twitter'
        },

        {
          link:'https://www.behance.net/designermadsen',
          language:'en',
          title:'',
          source:3,
          type:'behance'
        },

        {
          link:'https://medium.com/@DesignerMadsen',
          language:'en',
          source:4,
          type:'medium'
        },

        {
          link:'https://www.linkedin.com/company/designermadsen',
          language:'en',
          source:5,
          type:'linkedin'
        },

        {
          link:'https://www.deviantart.com/designermadsen/',
          language:'en',
          source:6,
          type:'deviantart'
        },

        {
          link:'https://github.com/KentMadsen',
          language:'en',
          source:7,
          type:'github'
        }
      ],

      listed_tags:
      [

      ],

      misc:
      [
        // -- type --
        // type : 0  text
        // type : 1  link
        {
          content:'Copyright 2019 Kent vejrup Madsen',
          link:'',
          type:0,
        },
        {
          content:'Data & Cookie Privacy',
          link:'#',
          type:1
        },
        {
          content:'GDPR',
          link:'#',
          type:1
        },
        {
          content:'Terms of Service',
          link:'#',
          type:1
        },
        {
          content:'Contact',
          link:'#',
          type:1
        },
        {
          content:'Backend Login',
          link:'https://journal.designermadsen.com/wp-login.php',
          type:1
        }

      ]


    },
    watch:
    {

    },
    methods:
    {
      parse_tags : function( code )
      {
        var i = 0;

        var arr = [  ];


        for( i = 0;
             i < code.data.length;
             i ++ )
        {
          var obj = createTag( code.data[i] );
          arr.push( obj );
        }

        this.listed_tags = arr;
      }

    },
    mounted: function()
    {
      var max = 100;
      axios
      .get('https://journal.designermadsen.com/wp-json/wp/v2/tags/?per_page=' + 100)
      .then( Response => ( this.parse_tags( Response )  ) );
    }
  }
);
