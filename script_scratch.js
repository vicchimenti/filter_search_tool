<script>
$(function () {
    console.log("one");
    $('.js-t4form-container').addClass('whoopie1');
    console.log("one js-t4form-container");
});
$(function () {
    console.log("two");
    $('.form-group').addClass('whoopie2');
    console.log("two form-group");
});
$(function () {
    console.log("three");
    $('.js-t4form-container iframe').contents().find('.js-main-container').addClass('whoopie3');
    console.log("three js-t4form-container iframe contents find js-main-container");
});
$(function () {
    console.log("four");
    $('.js-main-container iframe').contents().find('.div').addClass('whoopie4');
    console.log("four js-main-container iframe contents find");
});
$(function () {
    console.log("five");
    $('.js-elements-container iframe').contents().find('.div').addClass('whoopie5');
    console.log("five .js-elements-container iframe contents find");
});
$(function () {
    console.log("six");
    setInterval(function () {
        parent.postMessage("Hello", "https://us.formbank.us");
    }, 1000);
    console.log("six postMessage https://us.formbank.us");
});
</script>
