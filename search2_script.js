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
  $('#SelectBox-ByDestination').change(function() {
    var $dest = $(this).val();
    var $matches = $('.destination li').filter(function() {
      return $(this).text() === $dest
    });
    if (!$matches.length) {
      $(this).parent().addClass('hideByDestinationDropDownMenu');
    } else {
      $(this).parent().removeClass('hideByDestinationDropDownMenu');
    }
  });
});


$(function () {
  console.log("Here");
  $('#input-27855').change(function() {
    console.log("change");
    var $dest = $(this).val();
    $('.destinations').each(function() {
      var $matches = $('.destination li').filter(function() {
        console.log("Filter");
        return $(this).text() === destintion
      });
      if (!$matches.length) {
        $(this).parent().addClass('hideByDestinationDropDownMenu');
        console.log("add");
      } else {
        $(this).parent().removeClass('hideByDestinationDropDownMenu');
        console.log("remove");
      }
      console.log($matches);
    }
    console.log("changed");
  });
  console.log("done");
});


$(function () {
    $('#input-27855').on('change', function() {
      var dest = $(this).val();
      $('.destinations').each(function() {
        var $matches = $('.destintion li').filter(function() {
          return $(this).text() === dest
        });
        if(!$matches.length){
           // hide this destination div
        }else{
           // show it
        }

      });
    });
})


$(function () {
    var $key = $('#input-27855 option');
    var $val = $('.destination');
    $($val).filter(function(i, e) {
        if ($(e).text() != $key)
            $(this).parent().addClass('hideByDestinationDropDownMenu');
        else
            $(this).parent().removeClass('hideByDestinationDropDownMenu');
    });
});

$(function () {
  $('select#input-27855').quicksearch('.educationAbroadItemWrapper', {
    'delay': 100,
    'selector': '.destination > ul',
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
      $(this).removeClass('hideByDestinationDropDownMenu');
    },
    'hide': function() {
      $(this).addClass('hideByDestinationDropDownMenu');
    },
    'onAfter': function () {
      anythingThere();
    }
  });
});


$(function () {
  $('#input-27863').quicksearch('.educationAbroadItemWrapper', {
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
  $('#input-27864').quicksearch('.educationAbroadItemWrapper', {
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
  $('#input-27856').quicksearch('.educationAbroadItemWrapper', {
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
  visibleItems = $('.educationAbroadItemWrapper').not('.hideByTextbox, .hideByDestinationDropDownMenu, .hideByTermDropDown, .hideByProgramFeeDropDown, .hideByFieldOfStudyDropDown, .hideByFeatureDropDown, .hideByProgramTypeDropDown, .hideByLanguageDropDown, .hideByGPADropDown');

  if( visibleItems.length == 0) {
    $( ".noResultsToShow" ).show();
  } else {
    $( ".noResultsToShow" ).hide();
  }
}

</script>
