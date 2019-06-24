<script>

$(function () {
  $('input#id_search').quicksearch('.educationAbroadItemWrapper', {
    'delay': 400,
    'selector': ['h3, p'],
    'stripeRows': ['even', 'odd'],
    'noResults': '.noResultsToShow',
    'bind': 'keyup click',
    'minValLength': 2,
    'prepareQuery': function (val) {
      return new RegExp(val, "i");
    },
    'testQuery': function (query, txt, _row) {
      return query.test(txt);
    },
    'show': function() {
      $(this).removeClass('hideByTextbox');
    },
    'hide': function() {
      $(this).addClass('hideByTextbox');
    }
  });
});


$(function () {
  $('#SelectBox-ByProvider').quicksearch('.educationAbroadItemWrapper', {
    'delay': 100,
    'selector': '.Provider > ul',
    'bind': 'change',
                'prepareQuery': function (val) {
      return new RegExp(val, "i");
    },
    'testQuery': function (query, txt, _row) {
      return query.test(txt);
    },
    'show': function() {
      $(this).removeClass('hideByProviderDropDown');
    },
    'hide': function() {
      $(this).addClass('hideByProviderDropDown');
    },
    'onAfter': function () {
      anythingThere();
    }
  });
});

$(function () {
  $('#SelectBox-ByFieldOfStudy').quicksearch('.educationAbroadItemWrapper', {
    'delay': 100,
    'selector': '.FieldOfStudy > ul',
    'bind': 'change',
                'prepareQuery': function (val) {
      return new RegExp(val, "i");
    },
    'testQuery': function (query, txt, _row) {
      return query.test(txt);
    },
    'show': function() {
      $(this).removeClass('hideByFieldOfStudyDropDown');
    },
    'hide': function() {
      $(this).addClass('hideByFieldOfStudyDropDown');
    },
    'onAfter': function () {
      anythingThere();
    }
  });
});


$(function () {
  $('#SelectBox-ByTerm').quicksearch('div.educationAbroadItemWrapper', {
    'delay': 100,
    'selector': '.Term > ul',
    'bind': 'change',
                'prepareQuery': function (val) {
      return new RegExp(val, "i");
    },
    'testQuery': function (query, txt, _row) {
      return query.test(txt);
    },
    'show': function() {
      $(this).removeClass('hideByTermDropDown');
    },
    'hide': function() {
      $(this).addClass('hideByTermDropDown');
    },
    'onAfter': function () {
      anythingThere();
    }
          });
});







$(function () {
  $('#SelectBox-ByLanguage').quicksearch('div.educationAbroadItemWrapper', {
    'delay': 100,
    'selector': '.Language > ul',
                'bind': 'change',
                'prepareQuery': function (val) {
      return new RegExp(val, "i");
    },
    'testQuery': function (query, txt, _row) {
      return query.test(txt);
    },
    'show': function() {
      $(this).removeClass('hideByLanguageDropDown');
    },
    'hide': function() {
      $(this).addClass('hideByLanguageDropDown');
    },
    'onAfter': function () {
      anythingThere();
    }
  });
});


$(function () {
  $('#SelectBox-ByDestination').quicksearch('.educationAbroadItemWrapper', {
    'delay': 100,
    'selector': '.Destination > ul',
    'stripeRows': ['even', 'odd'],
    'noResults': '.noResultsToShow',
    'bind': 'keyup click',
    'minValLength': 2,
                 'prepareQuery': function (val) {
      return new RegExp(val, "i");
    },
    'testQuery': function (query, txt, _row) {
      return query.test(txt);
    },
    'show': function() {
      $(this).removeClass('hideByDestinationDropDown ');
    },
    'hide': function() {
      $(this).addClass('hideByDestinationDropDown ');
    },
    'onAfter': function () {
      anythingThere();
    }
});
});



var visibleItems = $(".educationAbroadItemWrapper");

function anythingThere(){

visibleItems = $('.educationAbroadItemWrapper').not('.hideByTextbox, .hideByLanguageDropDown, .hideByTermDropDown, .hideByProviderDropDown, .hideByFieldOfStudyDropDown, .hideByDestinationDropDown');

  if( visibleItems.length == 0) {
      $( ".noResultsToShow" ).show();
  } else {
      $( ".noResultsToShow" ).hide();
  }
}

</script>
