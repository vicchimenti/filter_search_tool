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
// need a parse function that works for value without a comma 12000 12,000
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
                    var $key = $parsedValue[3];
                    console.log("$key: " + $key);
                    if ($key) {
                        $('.programFee').filter(function(i,e) {
                            var $value = $(this).text();
                            console.log("$value: " + $value);
                            // When the Selected Value is Numeric Compare with Content Items
                            if (!isNaN($key)) {
                                // When the Content Item is Numeric Parse for higher/lower values
                                if ((!isNaN($value)) && ($value)) {
                                    var $keyInt = Number($key);
                                    console.log("$keyInt: " + $keyInt);
                                    var $valueInt = Number($value);
                                    console.log("$valueInt: " + $valueInt);
                                    // When the Content Value is Lower then Show the Item
                                    if ($keyInt >= $valueInt) {
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
                                if ($value.match($key)) {
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
                    var $key = $parsedValue[3];
                    console.log("$key: " + $key);
                    if ($key) {
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


//   ***   Term Filter   ***   //
$(function () {
    console.log("seven");
    $(window).load(function () {
        setTimeout(function (){
            $(function() {
                $('#input-28833').change(function () {
                    // T4 List Values Must Parse Out Extra Characters
                    var $rawFormValue = $(this).val();
                    // The Hyphen is the Best Delimiter to Use
                    var $parsedValue = $rawFormValue.split('-');
                    // There are Three Hyphens, our Value is After the Third Hyphen
                    var $key = $parsedValue[3];
                    // If Search Key is Not Null then Compare to the Term List Items in Each Content Item
                    if ($key) {
                        $('.term').filter(function(i,e) {
                            var $value = $(this).text();
                            // Check to see if the Key and Value are a Match
                            if ($value.match($key)) {
                                $(this).parents('.educationAbroadItemWrapper').removeClass('hideByTermDropDown');
                            } else {
                                $(this).parents('.educationAbroadItemWrapper').addClass('hideByTermDropDown');
                            }
                        });
                    // Else the Search Key is Null so Reset all Content Items to Visible
                    } else {
                        $('.educationAbroadItemWrapper').removeClass('hideByTermDropDown');
                    }
                });
            });
        // Delay the Change Function for 2 Seconds
        }, 2000);
    });
    console.log("seven term window setTimeout 2000");
});


//   ***   Language Filter   ***   //
$(function () {
    console.log("seven");
    $(window).load(function () {
        setTimeout(function (){
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
        }, 2000);
    });
    console.log("seven destinationDropDownMenu window onload3 setTimeout 2000");
});


// //   ***   Language Filter   ***   //
// $(function() {
//     $('#SelectBox-ByLanguage').change(function () {
//         var $language = $(this).val();
//         if ($language) {
//             $('.language').filter(function(i,e) {
//                 var $key = $(this).text();
//                 if ($key.match($language)) {
//                     $(this).parents('.educationAbroadItemWrapper').removeClass('hideByLanguageDropDown');
//                 } else {
//                     $(this).parents('.educationAbroadItemWrapper').addClass('hideByLanguageDropDown');
//                 }
//             });
//         } else {
//             $('.educationAbroadItemWrapper').removeClass('hideByLanguageDropDown');
//         }
//     });
// });


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
