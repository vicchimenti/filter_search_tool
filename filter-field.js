try {
  var fieldInstructions = content.get("Instructions");
  var fieldFieldCode = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<iframe id="t4-form-2236" width="560" height="700" src="https://us.formbank.us/embed/MjIzNi1lbg==" frameborder="0" scrolling="no"></iframe>
<script>function uif(e){var t=document.getElementById("t4-form-2236");t.setAttribute("height",e.height)}var domain="https://us.formbank.us",iframe=document.getElementById("t4-form-2236").contentWindow;setInterval(function(){iframe.postMessage("",domain)},3e3),window.addEventListener("message",function(e){"https://us.formbank.us"===e.origin&&uif(e.data)},!1);</script>");
  var fieldNoResultsMessage = content.get("No Results Message");
  var message = "";
  var fieldZone = com.terminalfour.publish.utils.BrokerUtils.processT4Tags(dbStatement, publishCache, section, content, language, isPreview, "<t4 type='content' name='Zone' output='normal' display_field='value' />");

  if (fieldNoResultsMessage.isNull()) {
    message = "<p>We're sorry, there are no results for the search parameters.</p>";
  } else {
    message = fieldNoResultsMessage;
  }

  if (fieldZone == 'ZoneA') {

    document.write('<div id="filterFieldWrapper" class="contentItem" data-posistion-default="ZoneA" data-position-selected="ZoneA" >\n  <div id="filterField" class="standardContent">');
    document.write('<div class="filterFieldInstructions">' + fieldInstructions + '</div>\n');
    document.write('<div>\n ' + fieldFieldCode + '<div class="clearfix"></div></div>\n</div>\n');
    document.write('<div class="noResultsToShow standardContent">' + message + '</div>\n');
    document.write('</div>');

  }


} catch(err) {
	document.write(err.message);
}
