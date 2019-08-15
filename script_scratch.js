<script>
$(function () {
    console.log("old school");
  $('.destinationDropDownMenu').quicksearch('.educationAbroadItemWrapper', {
    'delay': 700,
    'selector': '.destination > ul',
    'stripeRows': ['even', 'odd'],
    'loader': 'span.loading',
    'noResults': '.noResultsToShow',
    'bind': 'keyup click',
    'minValLength': 2,
    'removeDiacritics': true,
    'prepareQuery': function (val) {
      return new RegExp(val, "i");
    },
    'testQuery': function (query, txt, _row) {
      return query.test(txt);
    },
    'show': function() {
      $(this).removeClass('hideByDestinationDropDown');
    },
    'hide': function() {
      $(this).addClass('hideByDestinationDropDown');
    },
    'onAfter': function () {
      anythingThere();
    }
  });
  console.log("new school");
});
</script>
