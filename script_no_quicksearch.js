<script>

//   ***   Keyword Search   ***   //
// $(function () {
//     console.log("keyword");
//     $(window).load(function () {
//         setTimeout(function (){
//             $(function () {
//               $('input#id_search').quicksearch('.educationAbroadItemWrapper', {
//                 'delay': 400,
//                 'selector': ['h3, p'],
//                 'stripeRows': ['even', 'odd'],
//                 'noResults': '.noResultsToShow',
//                 'bind': 'keyup click',
//                 'minValLength': 2,
//                 'prepareQuery': function (val) {
//                   return new RegExp(val, "i");
//                 },
//                 'testQuery': function (query, txt, _row) {
//                   return query.test(txt);
//                 },
//                 'show': function() {
//                   $(this).removeClass('hideByTextbox');
//                 },
//                 'hide': function() {
//                   $(this).addClass('hideByTextbox');
//                 }
//               });
//             });
//         }, 2000);
//     });
//     console.log("keyword window setTimeout 2000");
// });

//   ***   Keyword Search   ***   //
// $(function () {
//   $('input#id_search').quicksearch('.educationAbroadItemWrapper', {
//     'delay': 400,
//     'selector': ['h3, p'],
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
//       $(this).removeClass('hideByTextbox');
//     },
//     'hide': function() {
//       $(this).addClass('hideByTextbox');
//     }
//   });
// });

//   ***   Program Fee Filter   ***   //
$(function () {
    console.log("two");
    $(window).load(function () {
        setTimeout(function (){
            $(function() {
                $('#input-28834').change(function () {
                    var $rawFormValue = $(this).val();
                    console.log("$rawFormValue: " + $rawFormValue);
                    var $parsedValue = $rawFormValue.split('-');
                    console.log("$parsedValue: " + $parsedValue);
                    var $key = $parsedValue[0];
                    console.log("$key: " + $key);
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
        }, 2000);
    });
    console.log("two input-28834 window setTimeout 2000");
});


//   ***   Program Fee Filter   ***   //
// $(function() {
//     $('#SelectBox-ByProgramFee').change(function () {
//         var $fee = $(this).val();
//         if ($fee) {
//             $('.programFee li').filter(function(i,e) {
//                 var $key = $(this).text();
//                 // When the Selected Value is Numeric Compare with Content Items
//                 if (!isNaN($fee)) {
//                     // When the Content Item is Numeric Parse for higher/lower values
//                     if (!isNaN($key)) {
//                         var $feeInt = Number($fee);
//                         var $keyInt = Number($key);
//                         // When the Content Value is Lower then Show the Item
//                         if ($feeInt >= $keyInt) {
//                             $(this).parents('.educationAbroadItemWrapper').removeClass('hideByProgramFeeDropDown');
//                         // When the Content Value is Higher then Hide the Item
//                         } else {
//                             $(this).parents('.educationAbroadItemWrapper').addClass('hideByProgramFeeDropDown');
//                         }
//                     // Selected Value is Numeric and the Content Value is Not then Hide it
//                     } else {
//                         $(this).parents('.educationAbroadItemWrapper').addClass('hideByProgramFeeDropDown');
//                     }
//                 // When the Selected Value is Not Numeric compare both for a match
//                 } else {
//                     if ($key.match($fee)) {
//                         $(this).parents('.educationAbroadItemWrapper').removeClass('hideByProgramFeeDropDown');
//                     } else {
//                         $(this).parents('.educationAbroadItemWrapper').addClass('hideByProgramFeeDropDown');
//                     }
//                 }
//             });
//         // When the Selected Value is NULL or Whitespace, reset the group and show all items
//         } else {
//             $('.educationAbroadItemWrapper').removeClass('hideByProgramFeeDropDown');
//         }
//     });
// });

//   ***   Destination Filter   ***   //
$(function () {
    console.log("three");
    $(window).load(function () {
        setTimeout(function (){
            $(function() {
                $('#input-28832').change(function () {
                    var $rawFormValue = $(this).val();
                    console.log("$rawFormValue: " + $rawFormValue);
                    var $parsedValue = $rawFormValue.split('-');
                    console.log("$parsedValue: " + $parsedValue);
                    var $key = $parsedValue[0];
                    console.log("$key: " + $key);
                    if ($key !== 'Select a Destination...') {
                        $('.destination').filter(function(i,e) {
                            var $value = $(this).text();
                            console.log("$value: " + $value);
                            if ($value.match($key)) {
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
        }, 2000);
    });
    console.log("three input-28832 window setTimeout 2000");
});



//   ***   Destination Filter   ***   //
// $(function() {
//     $('#SelectBox-ByDestination').change(function () {
//         var $destination = $(this).val();
//         if ($destination) {
//             $('.destination').filter(function(i,e) {
//                 var $key = $(this).text();
//                 if ($key.match($destination)) {
//                     $(this).parents('.educationAbroadItemWrapper').removeClass('hideByDestinationDropDown');
//                 } else {
//                     $(this).parents('.educationAbroadItemWrapper').addClass('hideByDestinationDropDown');
//                 }
//             });
//         } else {
//             $('.educationAbroadItemWrapper').removeClass('hideByDestinationDropDown');
//         }
//     });
// });


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
