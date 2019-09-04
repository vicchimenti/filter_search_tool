<script>
$(function () {
    console.log("one");
    $('.js-t4form-container').addClass('whoopie1');
    console.log("one js-t4form-container");
});
$(function () {
    console.log("two");
    $('.js-t4form-container').delay(5000).find('.form-group').addClass('whoopie2');
    console.log("two form-group 2000");
});
$(function () {
    console.log("three");
    $('.js-main-container').delay(6000).addClass('whoopie3');
    console.log("three js-main-container 3000");
});
$(function () {
    console.log("four");
    $('.js-elements-container').delay(7000).addClass('whoopie4');
    console.log("four js-elements-container 4000");
});
$(function () {
    console.log("five");
    setTimeout(function() {
        $('.js-main-container').addClass('timeout1');
    }, 4000);
    console.log("five jquery setTimeout");
});
setTimeout(function() {
    console.log("six");
    $('.js-main-container').addClass('timeout2');
    console.log("six raw js");
}, 4000);
</script>
