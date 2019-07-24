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
  var programImage = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='media' name='Program Image' output='selective output' display_field='value' />");
  var externalWebsiteLink = content.get("External Website Link");
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
  var beginningHTML = '<div class="educationAbroadItemWrapper" id="id<t4 type=\'meta\' meta=\'content_id\' />"><t4 type=\'meta\' meta=\'html_anchor\' /><div class="educationAbroadItem standardContent"><div id="accordion">';
  var endingHTML = '</div></div></div>\n';

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


  /* -- Write all the things -- */
  document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, beginningHTML));
  document.write('<div class="card">');
  document.write('<div class="card-header" id="heading<t4 type=\'meta\' meta=\'content_id\' />" aria-multiselectable="true"><t4 type="meta" meta="html_anchor" />');
  document.write('<button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse<t4 type=\'meta\' meta=\'content_id\' />" aria-expanded="false" aria-controls="collapse<t4 type=\'meta\' meta=\'content_id\' />">');
  document.write('<span><h3>' + program + '</h3>\n');
  document.write('<div class="descriptionWrapper">' + generalDescription + '</div></span>');
  document.write('<i class="fas fa-minus"></i><i class="fas fa-plus"></i>');
  document.write('</button></div>');
  document.write('<div id="collapse<t4 type=\'meta\' meta=\'content_id\' />" class="collapse" aria-labelledby="heading<t4 type=\'meta\' meta=\'content_id\' />" data-parent="accordion" aria-expanded="false">');
  document.write('<div class="card-body">');
  document.write('<div class="destination"><h4>Destinations</h4><ul>' +  listOfDestinations + '</ul></div>');
  document.write('<div class="term"><h4>Term</h4><ul>' +  listOfTerms + '</ul></div>');
  document.write('<div class="programFee"><h4>Program Fees</h4><ul>' +  listOfProgramFees + '</ul></div>');
  document.write('<div class="programImage"><img src="' + programImage + '" /></div>'); // ********* test and update image link if necessary ************
  document.write('<div class="externalLink"><a class="programItemExternalWebsiteLink" target="_blank" href="' + externalWebsiteLink + '">Visit website<span class="fas fa-external-link-alt"></span></a></div>');
  document.write('<div class="fieldOfStudy"><h4>Field of Study</h4><ul>' +  listOfStudyAreas + '</ul></div>');
  document.write('<div class="features"><h4>Features</h4><ul>' +  listOfFeatures + '</ul></div>');
  document.write('<div class="programType"><h4>Program Type</h4><ul> ' +  listOfTypes + '</ul></div>');
  document.write('<div class="language"><h4>Language of Instruction</h4><ul>' +  listOfLanguages + '</ul></div>');
  document.write('<div class="housing"><h4>Housing Accommodations</h4><ul> ' +  listOfHousing + '</ul></div>');
  document.write('<div class="gpa"><h4>GPA Requirements</h4><ul> ' +  listOfGPA + '</ul></div>');
  document.write('</div></div></div>');
  document.write(endingHTML);

  /* -- Error Checking -- */
  } catch(err) {
  document.write(err.message);
}
