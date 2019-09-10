<script>

//   ***   Keyword Search   ***   //
$(function () {
    console.log("keyword");
    // After the DOM is ready, Wait until the window loads
    $(window).load(function () {
        // Once window loads set a timeout delay
        setTimeout(function () {
            $(function () {
                // scan the keyword each character the user inputs
                $('#id_search').on('keyup', function () {
                    var $key = $(this).val().toLowerCase();
                    console.log("$key: " + $key);
                    // filter the education abroad items for the input key
                    $('.educationAbroadItemWrapper').filter(function () {
                        // when the search key is not present in the item then hide the item
                        $(this).toggleClass('hideByText', !($(this).text().toLowerCase().indexOf($key) > -1));
                    });
                });
            });
        // Delay the .on keyup function for 2 Seconds
        }, 2000);
    });
    console.log("keyword window setTimeout 2000");
});


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
                                        $(this).parents('.educationAbroadItemWrapper').removeClass('hideByProgramFee');
                                    // When the Content Value is Higher then Hide the Item
                                    } else {
                                        $(this).parents('.educationAbroadItemWrapper').addClass('hideByProgramFee');
                                    }
                                // Selected Value is Numeric and the Content Value is Not then Hide it
                                } else {
                                    $(this).parents('.educationAbroadItemWrapper').addClass('hideByProgramFee');
                                }
                            // When the Selected Value is Not Numeric compare both for a match
                            } else {
                                if ($value.match($key)) {
                                    $(this).parents('.educationAbroadItemWrapper').removeClass('hideByProgramFee');
                                } else {
                                    $(this).parents('.educationAbroadItemWrapper').addClass('hideByProgramFee');
                                }
                            }
                        });
                    // When the Selected Value is NULL or Whitespace, reset the group and show all items
                    } else {
                        $('.educationAbroadItemWrapper').removeClass('hideByProgramFee');
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
                                $(this).parents('.educationAbroadItemWrapper').removeClass('hideByDestination');
                            } else {
                                $(this).parents('.educationAbroadItemWrapper').addClass('hideByDestination');
                            }
                        });
                    } else {
                        $('.educationAbroadItemWrapper').removeClass('hideByDestination');
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
    // After the DOM is ready, Wait until the window loads
    $(window).load(function () {
        // Once window loads set a timeout delay
        setTimeout(function (){
            $(function() {
                // When the Dropdown Menu Selector Academic Terms Changes - Execute change function
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
                                $(this).parents('.educationAbroadItemWrapper').removeClass('hideByTerm');
                            } else {
                                $(this).parents('.educationAbroadItemWrapper').addClass('hideByTerm');
                            }
                        });
                    // Else the Search Key is Null so Reset all Content Items to Visible
                    } else {
                        $('.educationAbroadItemWrapper').removeClass('hideByTerm');
                    }
                });
            });
        // Delay the change function for 2 Seconds
        }, 2000);
    });
    console.log("seven term window setTimeout 2000");
});


//   ***   Language Filter   ***   //
$(function () {
    console.log("six");
    $(window).load(function () {
        setTimeout(function (){
            $(function() {
                $('#input-28835').change(function () {
                    var $rawFormValue = $(this).val();
                    console.log("$rawFormValue: " + $rawFormValue);
                    var $parsedValue = $rawFormValue.split('-');
                    console.log("$parsedValue: " + $parsedValue);
                    var $key = $parsedValue[3];
                    console.log("$key: " + $key);
                    if ($key) {
                        $('.language').filter(function(i,e) {
                            var $value = $(this).text();
                            if ($value.match($key)) {
                                $(this).parents('.educationAbroadItemWrapper').removeClass('hideByLanguage');
                            } else {
                                $(this).parents('.educationAbroadItemWrapper').addClass('hideByLanguage');
                            }
                        });
                    } else {
                        $('.educationAbroadItemWrapper').removeClass('hideByLanguage');
                    }
                });
            });
        }, 2000);
    });
    console.log("six language window setTimeout 2000");
});


//   ***   Housing Filter   ***   //
$(function () {
    console.log("five");
    $(window).load(function () {
        setTimeout(function (){
            $(function() {
                $('#input-28836').change(function () {
                    var $rawFormValue = $(this).val();
                    console.log("$rawFormValue: " + $rawFormValue);
                    var $parsedValue = $rawFormValue.split('-');
                    console.log("$parsedValue: " + $parsedValue);
                    var $key = $parsedValue[3];
                    console.log("$key: " + $key);
                    if ($key) {
                        $('.housing').filter(function(i,e) {
                            var $value = $(this).text();
                            console.log("$value: " + $value);
                            if ($value.match($key)) {
                                $(this).parents('.educationAbroadItemWrapper').removeClass('hideByHousing');
                            } else {
                                $(this).parents('.educationAbroadItemWrapper').addClass('hideByHousing');
                            }
                        });
                    } else {
                        $('.educationAbroadItemWrapper').removeClass('hideByHousing');
                    }
                });
            });
        }, 2000);
    });
    console.log("five housing window setTimeout 2000");
});


//  ***   Hide Marked Items   ***  //
$(function () {
    $('.noResultsToShow').addClass('hideResultsMessage');
    $(window).load(function () {
        setTimeout(function () {
            $(function () {
                // var $visibleItems = $('.educationAbroadItemWrapper');
                var $visibleItems = $('.educationAbroadItemWrapper').not('.hideByText, .hideByDestination, .hideByTerm, .hideByProgramFee, .hideByLanguage, .hideByHousing');
                $('noResultsToShow').toggleClass('hideResultsMessage', !($visibleItems));

                // if(!visibleItems) {
                //     $( '.noResultsToShow' ).show();
                // } else {
                //     $( '.noResultsToShow' ).hide();
                // }
            });
        }, 2000);
    });
});

// var visibleItems = $('.educationAbroadItemWrapper');
// function anythingThere() {
//   visibleItems = $('.educationAbroadItemWrapper').not('.hideByText, .hideByDestination, .hideByTerm, .hideByProgramFee, .hideByLanguage, .hideByHousing');
//   $('.noResultsToShow').hide();
//   $('.noResultsToShow').toggle(visibleItems);
//
//   // if(visibleItems.length == 0) {
//   //   $( '.noResultsToShow' ).show();
//   // } else {
//   //   $( '.noResultsToShow' ).hide();
//   // }
// }

</script>
