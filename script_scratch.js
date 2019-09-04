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
    }, 3000);
    console.log("two js-main-container 3000");
});
$(function () {
    console.log("three");
    setTimeout(function () {
        $('.js-elements-container').addClass('whoopie3');
    }, 5000);
    console.log("three js-elements-container 5000");
});
$(function () {
    console.log("four");
    setTimeout(function() {
        $('.form-group').addClass('whoopie4');
    }, 5000);
    console.log("four form-group 5000");
});
$(function () {
    console.log("five");
    $(window).load(function () {
        $('.js-main-container').delay(3000).addClass('onload1');
    });
    console.log("five js-main-container window load delay 3000");
});
$(function () {
    console.log("six");
    $(window).load(function () {
        setTimeout(function (){
            ('.js-elements-container').addClass('onload1');
        }, 2000);
    });
    console.log("six js-elements-container window load setTimeout 2000");
});

</script>
