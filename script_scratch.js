<script>
$(function () {
    console.log("one");
    $('#filterField').addClass('whoopie1');
    console.log("one filterField");
});
$(function () {
    console.log("two");
    $('.js-t4form-container').addClass('whoopie2');
    console.log("two js-t4form-container");
});
$(function () {
    console.log("three");
    $('.js-main-container').contents().find('.div').addClass('whoopie3');
    console.log("three js-main-container contents find");
});
$(function () {
    console.log("four");
    $('.js-t4form-container').contents().addClass('whoopie4');
    console.log("four js-t4form-container contents");
});
$(function () {
    console.log("five");
    $('.js-elements-container').contents().addClass('whoopie5');
    console.log("five .js-elements-container contents");
});
</script>
