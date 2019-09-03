<script>
$(function () {
    console.log("one");
    $('select.destinationDropDownMenu').addClass('whoopie1');
    console.log("one destinationDropDownMenu");
});
$(function () {
    console.log("two");
    $('.educationAbroadItemWrapper').addClass('whoopie2');
    console.log("two educationAbroadItemWrapper");
});
$(function () {
    console.log("three");
    $('.js-t4form-container').addClass('whoopie3');
    console.log("three js-t4form-container");
});
$(function () {
    console.log("four");
    $('.js-t4form-container > div').addClass('whoopie4');
    console.log("four js-t4form-container > div");
});
$(function () {
    console.log("five");
    $('.js-t4form-container').children('div').addClass('whoopie5');
    console.log("five js-t4form-container children");
});
$(function () {
    console.log("six");
    $('form.js-main-container').addClass('whoopie6');
    console.log("six form.js-main-container");
});
$(function () {
    console.log("seven");
    $('js-main-container iframe').addClass('whoopie7');
    console.log("seven js-main-container iframe");
});
$(function () {
    console.log("eight");
    $('js-t4form-container iframe').addClass('whoopie-iframe8');
    console.log("eight js-t4form-container iframe");
});
</script>
