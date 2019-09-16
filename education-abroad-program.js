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
  var provider = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Provider' output='normal' display_field='value' />");
  var listOfProviders = "";
  var prerequisites = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Prerequisites' output='normal' display_field='value' />");
  var city = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='City' output='normal' display_field='value' />");


  /* -- Prepare all the things -- */
  var beginningHTML = '<div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true"><div class="panel panel-default"><div class="educationAbroadItemWrapper" id="id<t4 type=\'meta\' meta=\'content_id\' />"><div class="accordion-group educationAbroadItem standardContent"><t4 type=\'meta\' meta=\'html_anchor\' />';
  var endingHTML = '</div></div></div></div>\n';

  /* parse the list of destinations, add <li> tags*/
  if (destination != "") {
    var arrayOfDestinations = destination.split(', ');
    for (i=0; i < arrayOfDestinations.length; i++) {
      listOfDestinations += '<li>' + arrayOfDestinations[i] + '</li>';
    }
  }

  /* parse the list of academic terms, add <li> tags*/
  if (term != "") {
    var arrayOfTerms = term.split(',');
    for (i=0; i < arrayOfTerms.length; i++) {
      listOfTerms += '<li>' + arrayOfTerms[i] + '</li>';
    }
  }

  /* parse the list of fees, add <li> tags*/
  if (programFee != "") {
    var arrayOfProgramFees = programFee.split(',');
    for (i=0; i < arrayOfProgramFees.length; i++) {
      listOfProgramFees += '<li>' + arrayOfProgramFees[i] + '</li>';
    }
  }

  /* parse the list of study areas, add <li> tags*/
  if (fieldOfStudy != "") {
    var arrayOfStudyAreas = fieldOfStudy.split(',');
    for (i=0; i < arrayOfStudyAreas.length; i++) {
      listOfStudyAreas += '<li>' + arrayOfStudyAreas[i] + '</li>';
    }
  }

  /* parse the list of features, add <li> tags*/
  if (features != "") {
    var arrayOfFeatures = features.split(',');
    for (i=0; i < arrayOfFeatures.length; i++) {
      listOfFeatures += '<li>' + arrayOfFeatures[i] + '</li>';
    }
  }

  /* parse the list of types, add <li> tags*/
  if (programType != "") {
    var arrayOfTypes = programType.split(',');
    for (i=0; i < arrayOfTypes.length; i++) {
      listOfTypes += '<li>' + arrayOfTypes[i] + '</li>';
    }
  }

  /* parse the list of languages, add <li> tags*/
  if (language != "") {
    var arrayOfLanguages = language.split(',');
    for (i=0; i < arrayOfLanguages.length; i++) {
      listOfLanguages += '<li>' + arrayOfLanguages[i] + '</li>';
    }
  }

  /* parse the list of housing, add <li> tags*/
  if (housing != "") {
    var arrayOfHousing = housing.split(',');
    for (i=0; i < arrayOfHousing.length; i++) {
      listOfHousing += '<li>' + arrayOfHousing[i] + '</li>';
    }
  }

  /* parse the list of gpa ranges, add <li> tags*/
  if (gpa != "") {
    var arrayOfGPA = gpa.split(',');
    for (i=0; i < arrayOfGPA.length; i++) {
      listOfGPA += '<li>' + arrayOfGPA[i] + '</li>';
    }
  }

  /* parse the list of providers, add <li> tags*/
  if (provider != "") {
    var arrayOfProviders = provider.split(',');
    for (i=0; i < arrayOfProviders.length; i++) {
      listOfProviders += '<li>' + arrayOfProviders[i] + '</li>';
    }
  }


  /*  -- Parse out Runtime Generated Content IDs -- */
  var cardHeader = '<div class="panel-heading card-header" role"tab" id="heading<t4 type=\'meta\' meta=\'content_id\' />">';
  var buttonLink = '<a role="button" id="button<t4 type=\'meta\' meta=\'content_id\' />" data-toggle="collapse" data-parent="#accordion" href="#collapse<t4 type=\'meta\' meta=\'content_id\' />" aria-expanded="false" aria-controls="collapse<t4 type=\'meta\' meta=\'content_id\' />">';
  var collapseDiv = '<div class="panel-collapse collapse" id="collapse<t4 type=\'meta\' meta=\'content_id\' />" role="tabpanel" aria-labelledby="heading<t4 type=\'meta\' meta=\'content_id\' />">';

  /* -- Write all the collapsible header -- */
  document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, beginningHTML));
  document.write('<div class="card">');
  document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, cardHeader));
  document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, buttonLink));
  document.write('<span class="programTitleBox"><i class="fas fa-minus"></i><i class="fas fa-plus"></i><span class="programTitle">' + program + '</span></span></a>\n');
  if (generalDescription != "") {
      document.write('<div class="descriptionWrapper">' + generalDescription + '</div>');
  } else {
      document.write('<div class="noDescription"></div>');
  }
  document.write('</div>');

  /* -- Write all the collapsible body -- */
  document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, collapseDiv));

  /* -- Write Program Cards--*/
  document.write('<div class="card-body panel-body">');
  document.write('<div class="container-fluid">');

  /* -- Write Program Image and Link- IF they are not null --*/
  document.write('<div class="row image-link">');
  if (city != "") {
      document.write('<div class="programCity"><h5>' + city + '</h5></div>');
  }
  if (programImageMedia != "") {
      document.write('<div class="card-img-top"><img src="' + programImageMedia + '" alt="' + altImage + '"/></div>');
  }
  if (externalWebsiteLink != "") {
      document.write('<div class="externalLink"><a class="programItemExternalWebsiteLink" target="_blank" href="' + externalWebsiteLink + '">Visit Program Website</a></div>');
  }
  document.write('</div>');

  /* -- Write Program Level 1 Summary Stats --*/
  document.write('<div class="row one">');
  document.write('<div class="col-xs-6 col-sm-3 programDetails destinations"><h3>Destination</h3><ul class="destination">' + listOfDestinations + '</ul></div>');
  document.write('<div class="col-xs-6 col-sm-3 programDetails fees"><h3>Fees</h3><ul class="programFee">' + listOfProgramFees + '</ul></div>');
  document.write('<div class="col-xs-6 col-sm-3 programDetails gradePoint"><h3>GPA</h3><ul class="gpa"> ' + listOfGPA + '</ul></div>');
  document.write('<div class="col-xs-6 col-sm-3 programDetails types"><h3>Type</h3><ul class="programType"> ' + listOfTypes + '</ul></div>');
  document.write('</div>');
  /* -- Write Program Level 2 Summary Stats --*/
  document.write('<div class="row two">');
  document.write('<div class="col-xs-6 col-sm-3 programDetails housingAccommodations"><h3>Housing</h3><ul class="housing"> ' + listOfHousing + '</ul></div>');
  document.write('<div class="col-xs-6 col-sm-3 programDetails languages"><h3>Language</h3><ul class="language">' + listOfLanguages + '</ul></div>');
  document.write('<div class="col-xs-6 col-sm-3 programDetails providers"><h3>Providers</h3><ul class="provider">' + listOfProviders + '</ul></div>');
  document.write('<div class="col-xs-6 col-sm-3 programDetails terms"><h3>Term</h3><ul class="term">' + listOfTerms + '</ul></div>');
  document.write('</div>');
  /* -- Write Program Level 3 Details --*/
  document.write('<div class="row three">');
  document.write('<div class="col-xs-12 programDetails features"><h3>Features</h3><ul class="feature">' + listOfFeatures + '</ul></div>');
  document.write('</div>');
  /* -- Write Program Level 4 Details --*/
  document.write('<div class="row four">');
  document.write('<div class="col-xs-12 programDetails fieldOfStudy"><h3>Field of Study</h3><ul class="field">' + listOfStudyAreas + '</ul></div>');
  document.write('</div>');
  /* -- Write Program Level 5 Details --*/
  if (prerequisites != "") {
      document.write('<div class="row five">');
      document.write('<div class="col-xs-12 programDetails prerequisites"><h3>Additional Prerequisites</h3>' + prerequisites + '</div>');
      document.write('</div>');
  }

  /* -- Write Closing Tags -- */
  document.write('</div></div></div></div>');
  document.write(endingHTML);

  /* -- Error Checking -- */
} catch(err) {
  document.write(err.message);
}
