
var footer_app = new Vue(
  {
    el:'#footer-navigation',

    data:
    {
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

      /* 
        {
          tags:'HTML',
          name:'',
          acronym:'',
          links:'#'
        },
    
      */

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
        }
          
      ]


    },
    watch:
    {

    },
    methods:
    {


    }
  }
);
