try {
  var fieldInstructions = content.get("Instructions");
  var fieldFieldCode = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Zone' output='normal' display_field='value' />");
  var fieldNoResultsMessage = content.get("No Results Message");
  var message = "";
  var fieldZone = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Zone' output='normal' display_field='value' />");

    if (fieldNoResultsMessage.isNull()) {
      message = '<p>Sorry, there are no results for that query.</p>';
    }else{
      message = fieldNoResultsMessage;
    }

  if (fieldZone == 'ZoneA'){

	document.write('<div id="filterFieldWrapper" class="contentItem" data-posistion-default="ZoneA" data-position-selected="ZoneA" >\n  <div id="filterField" class="standardContent">');
    document.write('<div class="filterFieldInstructions">' + fieldInstructions + '</div>\n');
    document.write('<div>\n ' + fieldFieldCode + '<div class="clearfix"></div></div>\n </div> \n');
    document.write('<div class="noResultsToShow standardContent">' + message + '</div>\n');
    document.write('</div>');

  }
  if (fieldZone == 'ZoneB'){
	if (fieldNoResultsMessage.isNull()) {
      message = '<p>Sorry, there are no results for that query.</p>';
    }else{
      message = fieldNoResultsMessage;
    }

	document.write('<div id="filterFieldWrapper" class="contentItem vspace hspace" data-posistion-default="ZoneB" data-position-selected="ZoneB" role="group" aria-label="search and filter">\n  <div id="filterField">');
    document.write('<div class="filterFieldInstructions">' + fieldInstructions + '</div>\n');
    document.write(fieldFieldCode + ' </div> \n');
    //document.write('<div class="noResultsToShow">' + message + '</div>\n');
    document.write('</div>');
  }
} catch(err) {
	document.write(err.message);
}


/*
<section class="filterFieldWrapper contentItem" id="id<t4 type='meta' meta='content_id' />">
  <div class="filterfield">
    <div class="filterFieldInstructions">
      <t4 type="content" name="Instructions" output="normal" modifiers="medialibrary,nav_sections" />
    </div>
    <fieldset>
      <t4 type="content" name="Field code" output="normal" modifiers="striptags,htmlentities" />
    </fieldset>
  </div>
  <div class="noResultsToShow"></div>
</section>
*/
