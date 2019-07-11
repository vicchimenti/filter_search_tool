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
  var provider = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Provider' output='normal' display_field='value' />");
  var listOfProviders = "";
  var language = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Language' output='normal' display_field='value' />");
  var listOfLanguages = "";
  var gpa = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='GPA' output='normal' display_field='value' />");
  var listOfGPA = "";


  // var deadline = content.get("Deadline"); ****** We may add a deadline field for aplication dates later
  // ************ Remove Institution per notes  ********************//
  // var institution = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Institution' output='normal' display_field='value' />");
  // var listOfInstitutions = "";


  /* -- Prepare all the things -- */
  var beginningHTML = '<div class="educationAbroadItemWrapper" id="id<t4 type=\'meta\' meta=\'content_id\' />"><t4 type=\'meta\' meta=\'html_anchor\' /><div class="educationAbroadItem standardContent">';
  var endingHTML = '</div></div>\n';

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
      listOfStudyAreas += '<li>' + listOfStudyAreas[i] + '</li>';
    }
  }

  /* parse the list of features, add <span> tags*/
  if (features != "") {
    var arrayOfFeatures = features.split(',');
    for (i=0; i < arrayOfFeatures.length; i++) {
      listOfFeatures += '<li>' + arrayOfFeatures[i] + '</li>';
    }
  }

  /* parse the list of providers, add <span> tags*/
  if (provider != "") {
    var arrayOfProviders = provider.split(',');
    for (i=0; i < arrayOfProviders.length; i++) {
      listOfProviders += '<li>' + arrayOfProviders[i] + '</li>';
    }
  }

  /* parse the list of languages, add <span> tags*/
  if (language != "") {
    var arrayOfLanguages = language.split(',');
    for (i=0; i < arrayOfLanguages.length; i++) {
      listOfLanguages += '<li>' + arrayOfLanguages[i] + '</li>';
    }
  }

  /* parse the list of gpa ranges, add <span> tags*/
  if (gpa != "") {
    var arrayOfGPA = gpa.split(',');
    for (i=0; i < arrayOfGPA.length; i++) {
      listOfGPA += '<li>' + arrayOfGPA[i] + '</li>';
    }
  }


  //  ************** remove institutions per notes   ***************  //
  // /* parse the list of institutions, add <span> tags*/
  // if (institution != "") {
  //   var arrayOfInstitutions = institution.split(',');
  //   for (i=0; i < arrayOfInstitutions.length; i++) {
  //     listOfInstitutions += '<li>' + arrayOfInstitutions[i] + '</li>';
  //   }
  // }


  /* -- Write all the things -- */
  document.write(com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, beginningHTML));
  document.write('<h3>' + program + '</h3>\n');
  document.write('<div class="descriptionWrapper">' + generalDescription + '</div>');
  document.write('<div class="destination"><h4>Destinations</h4><ul>' +  listOfDestinations + '</ul></div>');
  document.write('<div class="term"><h4>Term</h4><ul>' +  listOfTerms + '</ul></div>');
  document.write('<div class="programFee"><h4>Program Fees</h4><ul>' +  listOfProgramFees + '</ul></div>');
  document.write('<div class="programImage"><img src="programImage"></div>'); // ********* test and update image link if necessary ************
  document.write('<div class="externalLink"><a class="programItemExternalWebsiteLink" target="_blank" href="' + externalWebsiteLink + '">Visit website<span class="fas fa-external-link-alt"></span></a></div>')
  document.write('<div class="fieldOfStudy"><h4>Field of Study</h4><ul>' +  listOfStudyAreas + '</ul></div>');
  document.write('<div class="features"><h4>Features</h4><ul>' +  listOfFeatures + '</ul></div>');
  document.write('<div class="providers"><h4>Providers</h4><ul> ' +  listOfProviders + '</ul></div>');
  document.write('<div class="language"><h4>Language of Instruction</h4><ul>' +  listOfLanguages + '</ul></div>');
  document.write('<div class="gpa"><h4>GPA Requirements</h4><ul> ' +  listOfGPA + '</ul></div>');


  // document.write('<div class="institution"><h4>Institutions</h4><ul>' +  listOfInstitutions + '</ul></div>');
  // document.write('<div class="programItemDetails">'); *** not sure we need this line
  // if(deadline != "") {
  //   document.write('<div class="Deadline"><h4>Deadline</h4><ul><li>' +  deadline + '</li></ul></div>');
  // } ****** If we need to add a deadline field


  document.write('</div>');
  document.write(endingHTML);

  /* -- Error Checking -- */
  } catch(err) {
  document.write(err.message);
}