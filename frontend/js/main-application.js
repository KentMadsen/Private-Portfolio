var buffer_json = null;

var application = new Vue
(
  {
    el:'#application-framework',

    data:
    {

      listed_post_summaries:
      [
        {
          identity:1,
          registered:'6 days ago',
          title:'Lorem Ipsum',
          summary:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, mi sit amet faucibus tincidunt, nisi lorem scelerisque ipsum, ac scelerisque eros massa",
          description:'',

          resources:
          {

          }
        },

        {
          identity:2,
          registered:'6 days ago',
          title:'Lorem Ipsum',
          summary:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, mi sit amet faucibus tincidunt, nisi lorem scelerisque ipsum, ac scelerisque eros massa ',
          description:'',
          
          resources:
          {

          }
        },

        {
          identity:3,
          registered:'6 days ago',
          title:'Lorem Ipsum',
          summary:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, mi sit amet faucibus tincidunt, nisi lorem scelerisque ipsum, ac scelerisque eros massa ',
          description:'',
          
          resources:
          {

          }
        }

      ],

      active_page: 
      {
        id:null,
        selected:false
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
              /*
              {
                uri:"./page.php",
                name:"About",

                language:
                { 
                  acronym:"en", 
                  name:"english"
                },

                title:""
              },*/
/*
              {
                uri:"./projects.php",
                name:"Projects",

                language:
                {
                  acronym:"en", 
                  name:"english"
                },

                title:""
              },*/

              /*{
                uri:"./gallery.php",
                name:"Gallery",

                language:
                {
                  acronym:"en", 
                  name:"english"
                },

                title:""
                
              }, */
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
