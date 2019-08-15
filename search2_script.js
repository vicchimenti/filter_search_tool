<script>

$(function () {
  $('#id_search').quicksearch('.educationAbroadItemWrapper', {
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
    console.log("old school");
  $('.destinationDropDownMenu').quicksearch('.educationAbroadItemWrapper', {
    'delay': 700,
    'selector': '.destination > ul',
    'stripeRows': ['even', 'odd'],
    'loader': 'span.loading',
    'noResults': '.noResultsToShow',
    'bind': 'keyup click',
    'minValLength': 2,
    'removeDiacritics': true,
    'prepareQuery': function (val) {
      return new RegExp(val, "i");
    },
    'testQuery': function (query, txt, _row) {
      return query.test(txt);
    },
    'show': function() {
      $(this).removeClass('hideByDestinationDropDown');
    },
    'hide': function() {
      $(this).addClass('hideByDestinationDropDown');
    },
    'onAfter': function () {
      anythingThere();
    }
  });
  console.log("new school");
});


$(function () {
  $('select#input-27863').quicksearch('.educationAbroadItemWrapper', {
    'delay': 100,
    'selector': '.term > ul',
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
  document.querySelector("#input-27856").quicksearch('.educationAbroadItemWrapper', {
    'delay': 100,
    'selector': '.fieldOfStudy > ul',
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
  $('#input-27858').quicksearch('.educationAbroadItemWrapper', {
    'delay': 100,
    'selector': '.features > ul',
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
      $(this).removeClass('hideByFeatureDropDown');
    },
    'hide': function() {
      $(this).addClass('hideByFeatureDropDown');
    },
    'onAfter': function () {
      anythingThere();
    }
  });
});


$(function () {
  $('#input-27865').quicksearch('.educationAbroadItemWrapper', {
    'delay': 100,
    'selector': '.type > ul',
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
      $(this).removeClass('hideByProgramTyperDropDown');
    },
    'hide': function() {
      $(this).addClass('hideByProgramTypeDropDown');
    },
    'onAfter': function () {
      anythingThere();
    }
  });
});


$(function () {
  $('#input-27866').quicksearch('.educationAbroadItemWrapper', {
    'delay': 100,
    'selector': '.language > ul',
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
  $('select#input-27867.width-100.form-control.gpaDropDownMenu').quicksearch('.educationAbroadItemWrapper', {
    'delay': 100,
    'selector': '.gpa > ul',
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
      $(this).removeClass('hideByGPADropDown');
    },
    'hide': function() {
      $(this).addClass('hideByGPADropDown');
    },
    'onAfter': function () {
      anythingThere();
    }
  });
});


var visibleItems = $(".educationAbroadItemWrapper");

function anythingThere() {
  visibleItems = $('.educationAbroadItemWrapper').not('.hideByTextbox, .hideByDestinationDropDownMenu, .hideByTermDropDown, .hideByProgramFeeDropDown, .hideByFieldOfStudyDropDown, .hideByFeatureDropDown, .hideByProgramTypeDropDown, .hideByLanguageDropDown, .hideByGPADropDown, .hideByHousingDropDown');

  if( visibleItems.length == 0) {
    $( ".noResultsToShow" ).show();
  } else {
    $( ".noResultsToShow" ).hide();
  }
}

</script>
