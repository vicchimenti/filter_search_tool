<script>
$(function () {
    console.log("one");
    $('.js-t4form-container').addClass('whoopie1');
    console.log("one js-t4form-container");
});
$(function () {
    console.log("two");
    $('.form-group').delay(2000).addClass('whoopie2');
    console.log("two form-group 2000");
});
$(function () {
    console.log("three");
    $('.js-main-container').delay(3000).addClass('whoopie3');
    console.log("three js-main-container 3000");
});
$(function () {
    console.log("four");
    $('.js-elements-container').delay(4000).addClass('whoopie4');
    console.log("four js-elements-container 4000");
});
</script>
