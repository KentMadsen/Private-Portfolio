var showcase = new Vue(
    {
      el:'#showcase-projects',
      data:
      {
        projects:
        {
          keywords:[
            {
              category : 1,
              tags:'All',
              isActive:true

            },
           {
            category: 2,
            tags:'Website',
            isActive:false
           },

           {
            category: 2,
            tags:'Application',
            isActive:false

           },

           {
            category : 2,
            tags:'Database',
            isActive:false

           }
        ]
        }
  
      },
      watch:
      {
  
      },
      methods:
      {
  
      }
    }
  );
  