<script>

// Keyword - switch to HideSeek
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


// Destination - not done
$(function() {
    console.log("ByDestination");
    $('#SelectBox-ByDestination').change(function () {
        console.log("change");
        var $dest = $(this).val();
        console.log("$dest " + $dest);
        $('.destination').each(function() {
            var $matches = $('.destination li').filter(function () {
                console.log("filter");
                return $(this).text() === $dest
            });
            if (!$matches.length) {
                $(this).parents().find('div.educationAbroadItemWrapper').addClass('hideByDestinationDropDownMenu');
            } else {
                $(this).parents().find('div.educationAbroadItemWrapper').removeClass('hideByDestinationDropDownMenu');
            }
            console.log("filtered");
        });
        console.log("eached");
    });
    console.log("ByDestination done");
});


// Term TODO: Needs Multi-Select functionality ? and reset on whitespace
$(function() {
    console.log("ByTerm");
    $('#SelectBox-ByTerm').change(function () {
        console.log("change");
        var $term = $(this).val();
        $('.term li').filter(function(i, e) {
            console.log("filter value: " + $term);
            if ($(e).text() != $term)
                $(this).parents('.educationAbroadItemWrapper').addClass('hideByTermDropDown');
            else
                $(this).parents('.educationAbroadItemWrapper').removeClass('hideByTermDropDown');
        });
        console.log("filtered");
    });
    console.log("ByTerm done");
});


// Program Fee - Works for single-option
$(function() {
    console.log("ByProgramFee");
    $('#SelectBox-ByProgramFee').change(function () {
        console.log("change");
        var $null = '';
        var $fee = $(this).val();
        console.log('$fee: ' + $fee);
        $.each($('.programFee li'), function(i,e) {
            if ($fee != $null) {
                var $arr = [];
                $arr.push($(this).text());
                console.log('$arr: ' + $arr);
                var $matches = $.inArray($fee, $arr);
                console.log('$matches: ' + $matches);
                if ($matches == -1)
                    $(this).parents('.educationAbroadItemWrapper').addClass('hideByProgramFeeDropDown');
                else
                    $(this).parents('.educationAbroadItemWrapper').removeClass('hideByProgramFeeDropDown');
            } else {
                $(this).parents('.educationAbroadItemWrapper').removeClass('hideByProgramFeeDropDown');
            }
            console.log("filtered");
        });
    });
    console.log("ByProgramFee done");
});



// Field of Study - TODO: Needs Multiselect and logic update
$(function() {
    console.log("ByFieldOfStudy");
    $('#SelectBox-ByFieldOfStudy').change(function () {
        console.log("change");
        var $study = $(this).val();
        console.log("$study " + $study);
        $('.fieldOfStudy').each(function() {
            console.log("each");
            var $matches = $('.fieldOfStudy li').filter(function () {
                console.log("filter");
                return $(this).text() === $study;
            });
            if (!$matches.length) {
                $(this).parent().addClass('hideByFieldOfStudyDropDown');
            } else {
                $(this).parent().removeClass('hideByFieldOfStudyDropDown');
            }
            console.log("filtered");
        });
        console.log("eached");
    });
    console.log("ByFieldOfStudy done");
});


// Features TODO: Does not addClass if Features are blank null value
$(function() {
    console.log("ByFeature");
    $('#SelectBox-ByFeature').change(function () {
        $(this).parents('.educationAbroadItemWrapper').removeClass('hideByFeatureDropDown');
        console.log("change");
        // var $null = '';
        var $feature = $(this).val();
        console.log('$feature: ' + $feature);
        // if ($feature != $null) {
        $('.features').filter(function(j,v) {
            var $text = $(v).text();
            console.log('$text: ' + $text);
            if (!$text.match($feature)) {
                $(this).parents('.educationAbroadItemWrapper').addClass('hideByFeatureDropDown');
            } else {
                $(this).parents('.educationAbroadItemWrapper').removeClass('hideByFeatureDropDown');
            }
        });
        // } else {
        //     $(this).parents('.educationAbroadItemWrapper').removeClass('hideByFeatureDropDown');
        // }
        console.log("filtered");
    });
    console.log("ByFeature done");
});


// var $itemArray = [];
// if ($text.match($feature)) {
//     $arr.push($feature);
// }
// console.log('$arr: ' + $arr);
// // $itemArray = $.grep($arr, function(a) {
// //     return a == $feature;
// // });
// // console.log('$itemArray: ' + $itemArray);
// var $matches = $.inArray($feature, $arr);
// console.log('$matches: ' + $matches);

// $(function () {
//   $('#SelectBox-ByFeature').quicksearch('.educationAbroadItemWrapper', {
//     'delay': 100,
//     'selector': '.features > ul',
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
//       $(this).removeClass('hideByFeatureDropDown');
//     },
//     'hide': function() {
//       $(this).addClass('hideByFeatureDropDown');
//     },
//     'onAfter': function () {
//       anythingThere();
//     }
//   });
// });


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
