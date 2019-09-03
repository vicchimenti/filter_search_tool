<script>


//   ***   Keyword Search   ***   //
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


//   ***   Program Fee Filter   ***   //
$(function() {
    $('#SelectBox-ByProgramFee').change(function () {
        var $fee = $(this).val();
        if ($fee) {
            $('.programFee li').filter(function(i,e) {
                var $key = $(this).text();
                // When the Selected Value is Numeric Compare with Content Items
                if (!isNaN($fee)) {
                    // When the Content Item is Numeric Parse for higher/lower values
                    if (!isNaN($key)) {
                        var $feeInt = Number($fee);
                        var $keyInt = Number($key);
                        // When the Content Value is Lower then Show the Item
                        if ($feeInt >= $keyInt) {
                            $(this).parents('.educationAbroadItemWrapper').removeClass('hideByProgramFeeDropDown');
                        // When the Content Value is Higher then Hide the Item
                        } else {
                            $(this).parents('.educationAbroadItemWrapper').addClass('hideByProgramFeeDropDown');
                        }
                    // Selected Value is Numeric and the Content Value is Not then Hide it
                    } else {
                        $(this).parents('.educationAbroadItemWrapper').addClass('hideByProgramFeeDropDown');
                    }
                // When the Selected Value is Not Numeric compare both for a match
                } else {
                    if ($key.match($fee)) {
                        $(this).parents('.educationAbroadItemWrapper').removeClass('hideByProgramFeeDropDown');
                    } else {
                        $(this).parents('.educationAbroadItemWrapper').addClass('hideByProgramFeeDropDown');
                    }
                }
            });
        // When the Selected Value is NULL or Whitespace, reset the group and show all items
        } else {
            $('.educationAbroadItemWrapper').removeClass('hideByProgramFeeDropDown');
        }
    });
});


//   ***   Destination Filter   ***   //
$(function() {
    $('#SelectBox-ByDestination').change(function () {
        var $destination = $(this).val();
        if ($destination) {
            $('.destination').filter(function(i,e) {
                var $key = $(this).text();
                if ($key.match($destination)) {
                    $(this).parents('.educationAbroadItemWrapper').removeClass('hideByDestinationDropDown');
                } else {
                    $(this).parents('.educationAbroadItemWrapper').addClass('hideByDestinationDropDown');
                }
            });
        } else {
            $('.educationAbroadItemWrapper').removeClass('hideByDestinationDropDown');
        }
    });
});


//   ***   Term Filter   ***   //
$(function() {
    $('#SelectBox-ByTerm').change(function () {
        var $term = $(this).val();
        if ($term) {
            $('.term').filter(function(i,e) {
                var $key = $(this).text();
                if ($key.match($term)) {
                    $(this).parents('.educationAbroadItemWrapper').removeClass('hideByTermDropDown');
                } else {
                    $(this).parents('.educationAbroadItemWrapper').addClass('hideByTermDropDown');
                }
            });
        } else {
            $('.educationAbroadItemWrapper').removeClass('hideByTermDropDown');
        }
    });
});


// //   ***   Field Of Study Filter   ***   //
// $(function() {
//     $('#SelectBox-ByFieldOfStudy').change(function () {
//         var $study = $(this).val();
//         if ($study) {
//             $('.fieldOfStudy').filter(function(i,e) {
//                 var $key = $(this).text();
//                 if ($key.match($study)) {
//                     $(this).parents('.educationAbroadItemWrapper').removeClass('hideByFieldOfStudyDropDown');
//                 } else {
//                     $(this).parents('.educationAbroadItemWrapper').addClass('hideByFieldOfStudyDropDown');
//                 }
//             });
//         } else {
//             $('.educationAbroadItemWrapper').removeClass('hideByFieldOfStudyDropDown');
//         }
//     });
// });
//
//
// //   ***   Features Filter   ***   //
// $(function() {
//     $('#SelectBox-ByFeature').change(function () {
//         var $feature = $(this).val();
//         if ($feature) {
//             $('.features').filter(function(i,e) {
//                 var $key = $(this).text();
//                 if ($key.match($feature)) {
//                     $(this).parents('.educationAbroadItemWrapper').removeClass('hideByFeatureDropDown');
//                 } else {
//                     $(this).parents('.educationAbroadItemWrapper').addClass('hideByFeatureDropDown');
//                 }
//             });
//         } else {
//             $('.educationAbroadItemWrapper').removeClass('hideByFeatureDropDown');
//         }
//     });
// });
//
//
// //   ***   Program Type Filter   ***   //
// $(function() {
//     $('#SelectBox-ByProgramType').change(function () {
//         var $type = $(this).val();
//         if ($type) {
//             $('.programType').filter(function(i,e) {
//                 var $key = $(this).text();
//                 if ($key.match($type)) {
//                     $(this).parents('.educationAbroadItemWrapper').removeClass('hideByProgramTypeDropDown');
//                 } else {
//                     $(this).parents('.educationAbroadItemWrapper').addClass('hideByProgramTypeDropDown');
//                 }
//             });
//         } else {
//             $('.educationAbroadItemWrapper').removeClass('hideByProgramTypeDropDown');
//         }
//     });
// });


//   ***   Language Filter   ***   //
$(function() {
    $('#SelectBox-ByLanguage').change(function () {
        var $language = $(this).val();
        if ($language) {
            $('.language').filter(function(i,e) {
                var $key = $(this).text();
                if ($key.match($language)) {
                    $(this).parents('.educationAbroadItemWrapper').removeClass('hideByLanguageDropDown');
                } else {
                    $(this).parents('.educationAbroadItemWrapper').addClass('hideByLanguageDropDown');
                }
            });
        } else {
            $('.educationAbroadItemWrapper').removeClass('hideByLanguageDropDown');
        }
    });
});


//   ***   Housing Filter   ***   //
$(function() {
    $('#SelectBox-ByHousing').change(function () {
        var $housing = $(this).val();
        if ($housing) {
            $('.housing').filter(function(i,e) {
                var $key = $(this).text();
                if ($key.match($housing)) {
                    $(this).parents('.educationAbroadItemWrapper').removeClass('hideByHousingDropDown');
                } else {
                    $(this).parents('.educationAbroadItemWrapper').addClass('hideByHousingDropDown');
                }
            });
        } else {
            $('.educationAbroadItemWrapper').removeClass('hideByHousingDropDown');
        }
    });
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
