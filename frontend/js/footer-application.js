var application_footer = new Vue(
  {
    el:'#footer-navigation',

    data:
    {
      listed_tags: [],
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
      },

    }
  }
);
