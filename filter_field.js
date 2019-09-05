try {
  var fieldInstructions = content.get("Instructions");
  var fieldFieldCode = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='form' name='Education Abroad Search Filters' id='2236' />");
  var fieldNoResultsMessage = content.get("No Results Message");
  var message = "";
  var fieldZone = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Zone' output='normal' display_field='value' />");


  if (fieldZone == 'ZoneA') {
      
      if (fieldNoResultsMessage.isNull()) {
        message = '<p>Sorry, there are no results for that query.</p>';
      }else{
        message = fieldNoResultsMessage;
      }

    document.write('<div id="filterFieldWrapper" class="contentItem" data-posistion-default="ZoneA" data-position-selected="ZoneA" >\n  <div id="filterField" class="standardContent">');
    document.write('<div class="filterFieldInstructions">' + fieldInstructions + '</div>\n');
    document.write('<div>\n ' + fieldFieldCode + '<div class="clearfix"></div>\n</div>\n');
    document.write('<div class="noResultsToShow standardContent">' + message + '</div>\n');
    document.write('</div>');

  }
  // if (fieldZone == 'ZoneB'){
	// if (fieldNoResultsMessage.isNull()) {
  //     message = '<p>Sorry, there are no results for that query.</p>';
  //   }else{
  //     message = fieldNoResultsMessage;
  //   }
  //
	// document.write('<div id="filterFieldWrapper" class="contentItem vspace hspace" data-posistion-default="ZoneB" data-position-selected="ZoneB" role="group" aria-label="search and filter">\n<div id="filterField">');
  //   document.write('<div class="filterFieldInstructions">' + fieldInstructions + '</div>\n');
  //   document.write('<div>\n ' +fieldFieldCode + ' </div>\n');
  //   document.write('<div class="noResultsToShow">' + message + '</div>\n');
  //   document.write('</div>');
  // }

} catch(err) {
	document.write(err.message);
}
