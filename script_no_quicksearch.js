<script>


//  ***   Supress results message when page loads   ***  //
$(function () {
    $('.noResultsToShow').addClass('hideResultsMessage');
});


//   ***   Keyword Search   ***   //
$(function () {
    // After the DOM is ready, Wait until the window loads
    $(window).load(function () {
        // Once window loads set a timeout delay
        setTimeout(function () {
            $(function () {
                // scan the keyword each character the user inputs
                $('#id_search').on('keyup', function () {
                    var $key = $(this).val().toLowerCase();
                    // filter the education abroad items for the input key
                    $(function () {
                        $('.educationAbroadItemWrapper').filter(function () {
                            // when the search key is not present in the item then hide the item
                            $(this).toggleClass('hideByText', !($(this).text().toLowerCase().indexOf($key) > -1));
                        });
                    });
                    $(function resultsMessage() {
                        // assign array of currently visible content items
                        var $visibleItems = $('.educationAbroadItemWrapper').not('.hideByText, .hideByDestination, .hideByTerm, .hideByProgramFee, .hideByLanguage, .hideByHousing');
                        // check to see if array is empty
                        if ($visibleItems.length == 0) {
                            // when array is empty show the results message
                            $('.noResultsToShow').removeClass('hideResultsMessage');
                        } else {
                            // when array has content items suppress the results message
                            $('.noResultsToShow').addClass('hideResultsMessage');
                        }
                    });
                });
            });
        // Delay the .on keyup function for 2 Seconds
        }, 2000);
    });
});


//   ***   Program Fee Filter   ***   //
// need a parse function that works for value without a comma 12000 12,000
$(function () {
    $(window).load(function () {
        setTimeout(function (){
            $(function() {
                $('#input-28834').change(function () {
                    var $rawFormValue = $(this).val();
                    console.log("$rawFormValue: " + $rawFormValue);
                    var $parsedValue = $rawFormValue.split('-:::-:::-');
                    console.log("$parsedValue: " + $parsedValue);
                    var $key = $parsedValue[1];
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
                                    var $valueInt = Number($value);
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
                    // check results for null
                    $(function resultsMessage() {
                        // assign array of currently visible content items
                        var $visibleItems = $('.educationAbroadItemWrapper').not('.hideByText, .hideByDestination, .hideByTerm, .hideByProgramFee, .hideByLanguage, .hideByHousing');
                        // check to see if array is empty
                        if ($visibleItems.length == 0) {
                            // when array is empty show the results message
                            $('.noResultsToShow').removeClass('hideResultsMessage');
                        } else {
                            // when array has content items suppress the results message
                            $('.noResultsToShow').addClass('hideResultsMessage');
                        }
                    });
                });
            });
        }, 2000);
    });
});


//   ***   Destination Filter   ***   //
$(function () {
    $(window).load(function () {
        setTimeout(function (){
            $(function() {
                $('#input-28832').change(function () {
                    var $rawFormValue = $(this).val();
                    var $parsedValue = $rawFormValue.split('-:::-:::-');
                    var $key = $parsedValue[1];
                    if ($key) {
                        $('.destination').filter(function(i,e) {
                            var $value = $(this).text();
                            if ($value.match($key)) {
                                $(this).parents('.educationAbroadItemWrapper').removeClass('hideByDestination');
                            } else {
                                $(this).parents('.educationAbroadItemWrapper').addClass('hideByDestination');
                            }
                        });
                    } else {
                        $('.educationAbroadItemWrapper').removeClass('hideByDestination');
                    }
                    // check results for null
                    $(function resultsMessage() {
                        // assign array of currently visible content items
                        var $visibleItems = $('.educationAbroadItemWrapper').not('.hideByText, .hideByDestination, .hideByTerm, .hideByProgramFee, .hideByLanguage, .hideByHousing');
                        // check to see if array is empty
                        if ($visibleItems.length == 0) {
                            // when array is empty show the results message
                            $('.noResultsToShow').removeClass('hideResultsMessage');
                        } else {
                            // when array has content items suppress the results message
                            $('.noResultsToShow').addClass('hideResultsMessage');
                        }
                    });
                });
            });
        }, 2000);
    });
});


//   ***   Term Filter   ***   //
$(function () {
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
                    var $parsedValue = $rawFormValue.split('-:::-:::-');
                    // There are Three Hyphens, our Value is After the Third Hyphen
                    var $key = $parsedValue[1];
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
                    // check results for null
                    $(function resultsMessage() {
                        // assign array of currently visible content items
                        var $visibleItems = $('.educationAbroadItemWrapper').not('.hideByText, .hideByDestination, .hideByTerm, .hideByProgramFee, .hideByLanguage, .hideByHousing');
                        // check to see if array is empty
                        if ($visibleItems.length == 0) {
                            // when array is empty show the results message
                            $('.noResultsToShow').removeClass('hideResultsMessage');
                        } else {
                            // when array has content items suppress the results message
                            $('.noResultsToShow').addClass('hideResultsMessage');
                        }
                    });
                });
            });
        // Delay the change function for 2 Seconds
        }, 2000);
    });
});


//   ***   Language Filter   ***   //
$(function () {
    $(window).load(function () {
        setTimeout(function (){
            $(function() {
                $('#input-28835').change(function () {
                    var $rawFormValue = $(this).val();
                    var $parsedValue = $rawFormValue.split('-:::-:::-');
                    var $key = $parsedValue[1];
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
                    // check results for null
                    $(function resultsMessage() {
                        // assign array of currently visible content items
                        var $visibleItems = $('.educationAbroadItemWrapper').not('.hideByText, .hideByDestination, .hideByTerm, .hideByProgramFee, .hideByLanguage, .hideByHousing');
                        // check to see if array is empty
                        if ($visibleItems.length == 0) {
                            // when array is empty show the results message
                            $('.noResultsToShow').removeClass('hideResultsMessage');
                        } else {
                            // when array has content items suppress the results message
                            $('.noResultsToShow').addClass('hideResultsMessage');
                        }
                    });
                });
            });
        }, 2000);
    });
});


//   ***   Housing Filter   ***   //
$(function () {
    $(window).load(function () {
        setTimeout(function (){
            $(function() {
                $('#input-28836').change(function () {
                    var $rawFormValue = $(this).val();
                    var $parsedValue = $rawFormValue.split('-:::-:::-');
                    var $key = $parsedValue[1];
                    if ($key) {
                        $('.housing').filter(function(i,e) {
                            var $value = $(this).text();
                            if ($value.match($key)) {
                                $(this).parents('.educationAbroadItemWrapper').removeClass('hideByHousing');
                            } else {
                                $(this).parents('.educationAbroadItemWrapper').addClass('hideByHousing');
                            }
                        });
                    } else {
                        $('.educationAbroadItemWrapper').removeClass('hideByHousing');
                    }
                    // check results for null
                    $(function resultsMessage() {
                        // assign array of currently visible content items
                        var $visibleItems = $('.educationAbroadItemWrapper').not('.hideByText, .hideByDestination, .hideByTerm, .hideByProgramFee, .hideByLanguage, .hideByHousing');
                        // check to see if array is empty
                        if ($visibleItems.length == 0) {
                            // when array is empty show the results message
                            $('.noResultsToShow').removeClass('hideResultsMessage');
                        } else {
                            // when array has content items suppress the results message
                            $('.noResultsToShow').addClass('hideResultsMessage');
                        }
                    });
                });
            });
        }, 2000);
    });
});


</script>
