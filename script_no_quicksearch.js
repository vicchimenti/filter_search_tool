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


// $(function () {
//   $('#SelectBox-ByDestination').quicksearch('.educationAbroadItemWrapper', {
//     'delay': 100,
//     'selector': '.destination > ul',
//     'stripeRows': ['even', 'odd'],
//     'noResults': '.noResultsToShow',
//     'bind': 'keyup click',
//     'minValLength': 2,
//     'prepareQuery': function (val) {
//       return new RegExp(val, "i");
//     },
//     'testQuery': function (query, txt, _row) {
//       return query.test(txt);
//     },
//     'show': function() {
//       $(this).removeClass('hideByDestinationDropDown');
//     },
//     'hide': function() {
//       $(this).addClass('hideByDestinationDropDown');
//     },
//     'onAfter': function () {
//       anythingThere();
//     }
//   });
// });

$(function() {
    console.log("here");
    $('#SelectBox-ByDestination').change(function () {
        console.log("change");
        var dest = $(this).val();
        console.log("val");
        $('.destination').each(function()).filter(function(i, e) {
            console.log("filter");
            if ($(e).text() != '.destintionDropDownMenu option')
                $(this).parent().addClass('hideByDestinationDropDownMenu');
            else
                $(this).parent().removeClass('hideByDestinationDropDownMenu');
        });
        console.log("filtered");
    });
    console.log("done");
});


$(function() {
    console.log("here");
    $('#SelectBox-ByDestination').change(function () {
        console.log("change");
        $('.destination li').filter(function(i, e) {
            console.log("filter");
            if ($(e).text() != '.destintionDropDownMenu option')
                $(this).parent().addClass('hideByDestinationDropDownMenu');
            else
                $(this).parent().removeClass('hideByDestinationDropDownMenu');
        });
        console.log("filtered");
    });
    console.log("done");
});



$(function () {
  $('#SelectBox-ByTerm').quicksearch('.educationAbroadItemWrapper', {
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


// TODO: Selects all options when the value is contained within, such as 2000 selects both 2000 and 12000
$(function () {
  $('#SelectBox-ByProgramFee').quicksearch('.educationAbroadItemWrapper', {
    'delay': 100,
    'selector': '.programFee > ul',
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
      $(this).removeClass('hideByProgramFeeDropDown');
    },
    'hide': function() {
      $(this).addClass('hideByProgramFeeDropDown');
    },
    'onAfter': function () {
      anythingThere();
    }
  });
});


$(function () {
  $('#SelectBox-ByFieldOfStudy').quicksearch('.educationAbroadItemWrapper', {
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
  $('#SelectBox-ByFeature').quicksearch('.educationAbroadItemWrapper', {
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
  $('#SelectBox-ByProgramType').quicksearch('.educationAbroadItemWrapper', {
    'delay': 100,
    'selector': '.programType > ul',
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
      $(this).removeClass('hideByProgramTypeDropDown');
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
  $('#SelectBox-ByLanguage').quicksearch('.educationAbroadItemWrapper', {
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
  $('#SelectBox-ByHousing').quicksearch('.educationAbroadItemWrapper', {
    'delay': 100,
    'selector': '.housing > ul',
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
      $(this).removeClass('hideByHousingDropDown');
    },
    'hide': function() {
      $(this).addClass('hideByHousingDropDown');
    },
    'onAfter': function () {
      anythingThere();
    }
  });
});


var visibleItems = $(".educationAbroadItemWrapper");

function anythingThere() {
  visibleItems = $('.educationAbroadItemWrapper').not('.hideByTextbox, .hideByDestinationDropDown, .hideByTermDropDown, .hideByProgramFeeDropDown, .hideByFieldOfStudyDropDown, .hideByFeatureDropDown, .hideByProgramTypeDropDown, .hideByLanguageDropDown, .hideByHousingDropDown');

  if(visibleItems.length == 0) {
    $( ".noResultsToShow" ).show();
  } else {
    $( ".noResultsToShow" ).hide();
  }
}

</script>
