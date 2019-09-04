<script>
$(function () {
    console.log("one");
    $('.js-t4form-container').addClass('whoopie1');
    console.log("one js-t4form-container 0");
});
$(function () {
    console.log("two");
    setTimeout(function () {
        $('.js-main-container').addClass('whoopie2');
    }, 1000);
    console.log("two js-main-container 1000");
});
$(function () {
    console.log("three");
    setTimeout(function () {
        $('.js-elements-container').addClass('whoopie3');
    }, 3000);
    console.log("three js-elements-container 3000");
});
$(function () {
    console.log("four");
    setTimeout(function() {
        $('.form-group').addClass('whoopie4');
    }, 4000);
    console.log("four form-group 4000");
});
</script>
