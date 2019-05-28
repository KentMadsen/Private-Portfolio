var menu = new Vue(
  {
    el:'#menu-navigation',

    data:
    {
      mainNavigation:
      [
        {
          url:"./index.html",
          name:"Kent Madsen",
          language:"en"
        }

      ],
      linkNavigation:
      [
        {
          url:"./about.html",
          name:"About",
          language:"en"
        },
        {
          url:"./contact.html",
          name:"Contact",
          language:"en"
        },
        {
          url:"./projects.html",
          name:"Projects",
          language:"en"
        },
        {
          url:"http://journal.designermadsen.com",
          name:"Journal",
          language:"en"
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
