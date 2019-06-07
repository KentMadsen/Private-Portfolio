function EntityLanguage()
{
  constructor()
  {

  }

  this.name = variable_none;
  this.acronym = variable_none;

  this.class_name = 'EntityLanguage';
}

// Classes
  //
function EntitySocial()
{
  constructor()
  {

  }

  this.url = variable_none;
  this.media = variable_none;

  this.class_name = 'EntitySocialMenu';
}

function EntityTag()
{
  constructor()
  {

  }

  //
  this.id = variable_none;

  this.tag = variable_none;
  this.name = variable_none;

  //
  this.link = variable_none;

  //
  this.language = {};
  
  this.class_name = 'EntityTag';

  // Function
    // link
  this.getLink = function()
  {
    return this.link;
  };

  this.setLink = function( links_value )
  {
    this.link = links_value;
  };

    // tag
  this.setTag = function( tag_value )
  {
    this.tag = tag_value;
  };

  this.getTag = function()
  {
    return this.tag;
  };

  //
  this.getLanguage = function()
  {
    return this.language;
  };

  this.setLanguage = function( language_var, 
                               acronym_var )
  {
    this.language = 
    {
      name: language_var,
      acronym: acronym_var
    };

  };

// name
  this.setName = function( name_value )
  {
    this.name = name_value;
  };

  this.getName = function()
  {
    return this.name;
  };
}

    //
function EntitySummaryPost()
{
  this.title = variable_none;
  this.summary = variable_none;

  this.tags = [ null ];

  //
  this.registered = variable_none;

  this.link = variable_none;
  this.language = {};

  // Accessors
     // Link
  this.getLink = function()
  {
    return this.link;
  };

  this.setLink = function( object )
  {
    this.link = object;
  };

  // Language
  this.getLanguage = function()
  {
    return this.language;
  };

  this.setLanguage = function( object )
  {
    this.language = object;
  };

  // gtags
  this.getTags = function()
  {
    return this.tags;
  };

  this.setTags = function( object )
  {
    this.tags = object;
  };

  // Summary
  this.getSummary = function()
  {
    return this.summary;
  };

  this.setSummary = function( object )
  {
    this.summary = object;
  };

  // Title
  this.getTitle = function()
  {
    return this.title;
  };

  this.setTitle = function( object )
  {
    this.title = object;
  };

  // Register
  this.getRegistered = function()
  {
    return this.registered;
  };

  this.setRegistered = function( object )
  {
    this.registered = object;
  };
};
