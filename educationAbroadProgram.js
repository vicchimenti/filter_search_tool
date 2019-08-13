try {
  /* -- Store all the things -- */
  var program = content.get("Program Name");
  var generalDescription = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='General Description' output='normal' display_field='value' />");
  var destination = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Destination' output='normal' display_field='value' />");
  var listOfDestinations = "";
  var term = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Term' output='normal' display_field='value' />");
  var listOfTerms = "";
  var programFee = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Program Fee' output='normal' display_field='value' />");
  var listOfProgramFees = "";
  // TODO: ***************    update program image t4 parameters *******************************************
  var programImageMedia = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Education Abroad Program Image' output='normal' formatter='path/*' />");
  var altImage = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Alt Image' output='normal' modifiers='striptags,htmlentities' />");
  var externalWebsiteLink = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='External Website Link' output='normal' display_field='value' />");
  var fieldOfStudy = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Field of Study' output='normal' display_field='value' />");
  var listOfStudyAreas = "";
  var features = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Features' output='normal' display_field='value' />");
  var listOfFeatures = "";
  var programType = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Program Type' output='normal' display_field='value' />");
  var listOfTypes = "";
  var language = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Language' output='normal' display_field='value' />");
  var listOfLanguages = "";
  var gpa = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='GPA' output='normal' display_field='value' />");
  var listOfGPA = "";
  var housing = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Housing Accommodations' output='normal' display_field='value' />");
  var listOfHousing = "";


  /* -- Prepare all the things -- */
  var beginningHTML = '<div id="accordion"><div class="educationAbroadItemWrapper" id="id<t4 type=\'meta\' meta=\'content_id\' />"><div class="accordion-group"><div class="educationAbroadItem standardContent"><t4 type=\'meta\' meta=\'html_anchor\' />';
  var endingHTML = '</div></div></div></div>\n';

  /* parse the list of destinations, add <span> tags*/
  if (destination != "") {
    var arrayOfDestinations = destination.split(',');
    for (i=0; i < arrayOfDestinations.length; i++) {
      listOfDestinations += '<li>' + arrayOfDestinations[i] + '</li>';
    }
  }

  /* parse the list of academic terms, add <span> tags*/
  if (term != "") {
    var arrayOfTerms = term.split(',');
    for (i=0; i < arrayOfTerms.length; i++) {
      listOfTerms += '<li>' + arrayOfTerms[i] + '</li>';
    }
  }

  /* parse the list of institutions, add <span> tags*/
  if (programFee != "") {
    var arrayOfProgramFees = programFee.split(',');
    for (i=0; i < arrayOfProgramFees.length; i++) {
      listOfProgramFees += '<li>' + arrayOfProgramFees[i] + '</li>';
    }
  }

  /* parse the list of study areas, add <span> tags*/
  if (fieldOfStudy != "") {
    var arrayOfStudyAreas = fieldOfStudy.split(', ');
    for (i=0; i < arrayOfStudyAreas.length; i++) {
      listOfStudyAreas += '<li>' + arrayOfStudyAreas[i] + '</li>';
    }
  }

  /* parse the list of features, add <span> tags*/
  if (features != "") {
    var arrayOfFeatures = features.split(',');
    for (i=0; i < arrayOfFeatures.length; i++) {
      listOfFeatures += '<li>' + arrayOfFeatures[i] + '</li>';
    }
  }

  /* parse the list of types, add <span> tags*/
  if (programType != "") {
    var arrayOfTypes = programType.split(',');
    for (i=0; i < arrayOfTypes.length; i++) {
      listOfTypes += '<li>' + arrayOfTypes[i] + '</li>';
    }
  }

  /* parse the list of languages, add <span> tags*/
  if (language != "") {
    var arrayOfLanguages = language.split(',');
    for (i=0; i < arrayOfLanguages.length; i++) {
      listOfLanguages += '<li>' + arrayOfLanguages[i] + '</li>';
    }
  }

  /* parse the list of housing, add <span> tags*/
  if (housing != "") {
    var arrayOfHousing = housing.split(',');
    for (i=0; i < arrayOfHousing.length; i++) {
      listOfHousing += '<li>' + arrayOfHousing[i] + '</li>';
    }
  }

  /* parse the list of gpa ranges, add <span> tags*/
  if (gpa != "") {
    var arrayOfGPA = gpa.split(',');
    for (i=0; i < arrayOfGPA.length; i++) {
      listOfGPA += '<li>' + arrayOfGPA[i] + '</li>';
    }
  }


  /*  -- Parse out Runtime Generated Content IDs -- */
  var cardHeader = '<div class="card-header" id="heading<t4 type=\'meta\' meta=\'content_id\' />">';
  var buttonLink = '<button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse<t4 type=\'meta\' meta=\'content_id\' />" aria-expanded="false" aria-controls="collapse<t4 type=\'meta\' meta=\'content_id\' />">';
  var collapseDiv = '<div id="collapse<t4 type=\'meta\' meta=\'content_id\' />" class="collapse" aria-labelledby="heading<t4 type=\'meta\' meta=\'content_id\' />" aria-expanded="false" data-parent="#accordion">';

  /* -- Write all the collapsible header -- */
  document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, beginningHTML));
  document.write('<div class="card" id="programFull">');
  document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, cardHeader));
  document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, buttonLink));
  document.write('<span class="programTitleBox"><i class="fas fa-minus"></i><i class="fas fa-plus"></i><span class="programTitle">' + program + '</span></span></button>\n');
  document.write('<div class="descriptionWrapper">' + generalDescription + '</div>');
  document.write('</div>');

  /* -- Write all the collapsible body -- */
  document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, collapseDiv));

  /* -- Write Program Cards--*/
  document.write('<div class="card-body" id="programBody">');
  document.write('<div class="container-fluid">');

  /* -- Write Program Image and Link--*/
  document.write('<div class="row no-gutters" id="image-link">');
  document.write('<div class="col-md-12" id="image-link">');
  document.write('<div class="card-img-top"><img src="'+ programImageMedia +'" alt="'+altImage+'"/></div>');
  document.write('<div class="externalLink"><a class="programItemExternalWebsiteLink" target="_blank" href="' + externalWebsiteLink + '"><h5>Visit ' + program + ' Website</h5></div>');
  document.write('</div>');

  /* -- Write Program Level 1 Summary Stats --*/
  document.write('<div class="row no-gutters" id="row1">');
  document.write('<div class="col-md-4" id="destination"><h3>Destinations</h3><ul>' +  listOfDestinations + '</ul></div>');
  document.write('<div class="col-md-4" id="programFee"><h4>Program Fees</h4><ul>' +  listOfProgramFees + '</ul></div>');
  document.write('<div class="col-md-4" id="gpa"><h4>GPA Requirements</h4><ul> ' +  listOfGPA + '</ul></div>');
  document.write('</div>');
  /* -- Write Program Level 2 Summary Stats --*/
  document.write('<div class="row no-gutters" id="row1">');
  document.write('<div class="col-md-4" id="programType"><h4>Program Type</h4><ul> ' +  listOfTypes + '</ul></div>');
  document.write('<div class="col-md-4" id="language"><h4>Language of Instruction</h4><ul>' +  listOfLanguages + '</ul></div>');
  document.write('<div class="col-md-4" id="housing"><h4>Housing Accommodations</h4><ul> ' +  listOfHousing + '</ul></div>');
  document.write('</div>');
  /* -- Write Program Level 3 Details --*/
  document.write('<div class="row no-gutters" id="row1">');
  document.write('<div class="col-md-4" id="fieldOfStudy"><h4>Field of Study</h4><ul>' +  listOfStudyAreas + '</ul></div>');
  document.write('<div class="col-md-4" id="features"><h4>Features</h4><ul>' +  listOfFeatures + '</ul></div>');
  document.write('<div class="col-md-4" id="term"><h4>Term</h4><ul>' +  listOfTerms + '</ul></div>');
  document.write('</div>');

  /* -- Write Closing Tags -- */
  document.write('</div></div></div></div>');
  document.write(endingHTML);

  /* -- Error Checking -- */
  } catch(err) {
  document.write(err.message);
}
