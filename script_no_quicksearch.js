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



//   ***   ByDestination Filter   ***   //
$(function() {
    console.log("ByDestination");
    $('#SelectBox-ByDestination').change(function () {
        $(this).parents('.educationAbroadItemWrapper').removeClass('hideByDestinationDropDown');
        console.log("change");
        var $destination = $(this).val();
        console.log("$destination: " + $destination);
        $('.destination').filter(function(i,e) {
            var $text = $(this).text();
            console.log("$text: " + $text);
            if ($text.match($destination)) {
                $(this).parents('.educationAbroadItemWrapper').removeClass('hideByDestinationDropDown');
            } else {
                $(this).parents('.educationAbroadItemWrapper').addClass('hideByDestinationDropDown');
            }
        });
    });
    console.log("ByDestination done");
});

// // Destination - not done
// $(function() {
//     console.log("ByDestination");
//     $('#SelectBox-ByDestination').change(function () {
//         console.log("change");
//         var $dest = $(this).val();
//         console.log("$dest " + $dest);
//         $('.destination').each(function() {
//             var $matches = $('.destination li').filter(function () {
//                 console.log("filter");
//                 return $(this).text() === $dest
//             });
//             if (!$matches.length) {
//                 $(this).parents().find('div.educationAbroadItemWrapper').addClass('hideByDestinationDropDownMenu');
//             } else {
//                 $(this).parents().find('div.educationAbroadItemWrapper').removeClass('hideByDestinationDropDownMenu');
//             }
//             console.log("filtered");
//         });
//         console.log("eached");
//     });
//     console.log("ByDestination done");
// });


//   ***   Term Filter   ***   //
$(function() {
    console.log("ByTerm");
    $('#SelectBox-ByTerm').change(function () {
        $(this).parents('.educationAbroadItemWrapper').removeClass('hideByTermDropDown');
        console.log("change");
        var $term = $(this).val();
        console.log("$term: " + $term);
        $('.term').filter(function(i,e) {
            var $text = $(this).text();
            console.log("$text: " + $text);
            if ($text.match($term)) {
                $(this).parents('.educationAbroadItemWrapper').removeClass('hideByTermDropDown');
            } else {
                $(this).parents('.educationAbroadItemWrapper').addClass('hideByTermDropDown');
            }
        });
    });
    console.log("ByTerm done");
});


//   ***   Program Fee Filter   ***   //
// *********** Works for single-option exact match only ************  //
// TODO: Add logic for range of values based on selection
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




//   ***   Field Of Study Filter   ***   //
$(function() {
    console.log("ByFieldOfStudy");
    $('#SelectBox-ByFieldOfStudy').change(function () {
        $(this).parents('.educationAbroadItemWrapper').removeClass('hideByFieldOfStudyDropDown');
        console.log("change");
        var $study = $(this).val();
        console.log('$study: ' + $study);
        $('.fieldOfStudy').filter(function(i,e) {
            var $text = $(this).text();
            console.log('$text: ' + $text);
            if ($text.match($study)) {
                $(this).parents('.educationAbroadItemWrapper').removeClass('hideByFieldOfStudyDropDown');
            } else {
                $(this).parents('.educationAbroadItemWrapper').addClass('hideByFieldOfStudyDropDown');
            }
        });
        console.log("filtered");
    });
    console.log("ByFieldOfStudy done");
});


//   ***   Features Filter   ***   //
$(function() {
    console.log("ByFeature");
    $('#SelectBox-ByFeature').change(function () {
        $(this).parents('.educationAbroadItemWrapper').removeClass('hideByFeatureDropDown');
        console.log("change");
        var $feature = $(this).val();
        console.log('$feature: ' + $feature);
        $('.features').filter(function(i,e) {
            var $text = $(this).text();
            console.log('$text: ' + $text);
            if ($text.match($feature)) {
                $(this).parents('.educationAbroadItemWrapper').removeClass('hideByFeatureDropDown');
            } else {
                $(this).parents('.educationAbroadItemWrapper').addClass('hideByFeatureDropDown');
            }
        });
        console.log("filtered");
    });
    console.log("ByFeature done");
});


//   ***   Program Type Filter   ***   //
$(function() {
    console.log("ByProgramType");
    $('#SelectBox-ByProgramType').change(function () {
        $(this).parents('.educationAbroadItemWrapper').removeClass('hideByProgramTypeDropDown');
        console.log("change");
        var $type = $(this).val();
        console.log("$type: " + $type);
        $('.programType').filter(function(i,e) {
            var $text = $(this).text();
            console.log("$text: " + $text);
            if ($text.match($type)) {
                $(this).parents('.educationAbroadItemWrapper').removeClass('hideByProgramTypeDropDown');
            } else {
                $(this).parents('.educationAbroadItemWrapper').addClass('hideByProgramTypeDropDown');
            }
        });
    });
    console.log("ByProgramType done");
});


//   ***   Language Filter   ***   //
$(function() {
    console.log("ByLanguage");
    $('#SelectBox-ByLanguage').change(function () {
        $(this).parents('.educationAbroadItemWrapper').removeClass('hideByLanguageDropDown');
        console.log("change");
        var $language = $(this).val();
        console.log("$language: " + $language);
        $('.language').filter(function(i,e) {
            var $text = $(this).text();
            console.log("$text: " + $text);
            if ($text.match($language)) {
                $(this).parents('.educationAbroadItemWrapper').removeClass('hideByLanguageDropDown');
            } else {
                $(this).parents('.educationAbroadItemWrapper').addClass('hideByLanguageDropDown');
            }
        });
    });
    console.log("ByLanguage done");
});


//   ***   Housing Filter   ***   //
//TODO: the Apartment Housing option overflows into the Housing Accomodation Header  *** MUST FIX ***
$(function() {
    console.log("ByHousing");
    $('#SelectBox-ByHousing').change(function () {
        $(this).parents('.educationAbroadItemWrapper').removeClass('hideByHousingDropDown');
        console.log("change");
        var $housing = $(this).val();
        console.log("$housing: " + $housing);
        $('.housing').filter(function(i,e) {
            var $text = $(this).text();
            console.log("$text: " + $text);
            if ($text.match($housing)) {
                $(this).parents('.educationAbroadItemWrapper').removeClass('hideByHousingDropDown');
            } else {
                $(this).parents('.educationAbroadItemWrapper').addClass('hideByHousingDropDown');
            }
        });
    });
    console.log("ByHousing done");
});


//  ***   Hide Marked Items   ***  //
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
