// functions
function createTag( entity )
{
  var entity_result = new EntityTag();

  entity_result.setLinks( entity.link );
  entity_result.setTag( entity.name );
  entity_result.setName( entity.slug );

  return entity_result;
};

// Classes
  //
function EntityTag()
{
  this.tag = variable_none;
  this.name = variable_none;
  this.link = variable_none;

  //
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
    this.link = links_value;
  };

}

    //
function EntitySummaryPost()
{
  this.registered = variable_none;

  this.title = variable_none;
  this.summary = variable_none;
  this.tags = [ null ];

  this.link = variable_none;
  this.language = variable_none;

  // Accessors
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
