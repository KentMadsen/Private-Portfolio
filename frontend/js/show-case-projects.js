var showcase = new Vue
(
  {
    el:'#showcase-projects',

    data:
      {
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
      clickEvenFilterTag: function ( event )
      {
        console.log( event );
          

      }
  
    }
  }
);



  