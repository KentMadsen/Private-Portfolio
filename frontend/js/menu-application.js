var menu = new Vue(
  {
    el:'#menu-navigation',

    data:
    {
      mainNavigation:
      [
        {
          url:"./index.php",
          name:"Kent Madsen",
          language:"en"
        }

      ],
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
