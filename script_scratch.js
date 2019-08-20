<script>
$(function () {
    console.log("one");
    $('select.destinationDropDownMenu').addClass('whoopie');
    console.log("one destinationDropDownMenu");
});
$(function () {
    console.log("one");
    $('label.control-label').addClass('whoopie');
    console.log("one destinationDropDownMenu");
});
$(function () {
    console.log("two");
    $('.educationAbroadItemWrapper').addClass('whoopie');
    console.log("two educationAbroadItemWrapper");
});
$(function () {
    console.log("three");
    $('.js-t4form-container').addClass('whoopie');
    console.log("three js-t4form-container");
});
$(function () {
    console.log("four");
    $('.js-t4form-container > div').addClass('whoopie');
    console.log("four js-t4form-container > div");
});
$(function () {
    console.log("five");
    $('.js-t4form-container').children('div').addClass('whoopie');
    console.log("five js-t4form-container children");
});
$(function () {
    console.log("six");
    $('form.js-main-container').addClass('whoopie');
    console.log("six form.js-main-container");
});
$(function () {
    console.log("seven");
    $('form.js-main-container .js-elements-container').addClass('whoopie');
    console.log("seven form.js-main-container .js-elements-container");
});
</script>
