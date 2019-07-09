<script>

$(function () {
  $('input#id_search').hideseek('.educationAbroadItemWrapper', {
    'delay': 100,
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
  $('#SelectBox-ByTerm').quicksearch('div.educationAbroadItemWrapper', {
    'delay': 100,
    'selector': '.term > ul',
    'bind': 'change',
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
  $('#SelectBox-ByProvider').quicksearch('.educationAbroadItemWrapper', {
    'delay': 100,
    'selector': '.provider > ul',
    'bind': 'change',
                'prepareQuery': function (val) {
      return new RegExp(val, "i");
    },
    'testQuery': function (query, txt, _row) {
      return query.test(txt);
    },
    'show': function() {
      $(this).removeClass('hideByProviderDropDown');
    },
    'hide': function() {
      $(this).addClass('hideByProviderDropDown');
    },
    'onAfter': function () {
      anythingThere();
    }
  });
});


$(function () {
  $('#SelectBox-ByGPA').quicksearch('.educationAbroadItemWrapper', {
    'delay': 100,
    'selector': '.gpa > ul',
    'bind': 'change',
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
  visibleItems = $('.educationAbroadItemWrapper').not('.hideByTextbox, .hideByTermDropDown, .hideByProviderDropDown, .hideByGPADropDown');

  if( visibleItems.length == 0) {
    $( ".noResultsToShow" ).show();
  } else {
    $( ".noResultsToShow" ).hide();
  }
}

</script>




// var options = ["1", "2", "3", "4", "5"];
// $('#select').empty();
// $.each(options, function(i, p) {
//     $('#select').append($('<option></option>').val(p).html(p));
// });
