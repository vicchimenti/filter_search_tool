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
    }, 4000);
    console.log("two js-main-container 4000");
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
        $('.fieldOfStudyDropDownMenu').addClass('whoopie4');
    }, 5000);
    console.log("four fieldOfStudyDropDownMenu 5000");
});
$(function () {
    console.log("five");
    $(window).load(function () {
        $('.js-main-container').delay(5000).addClass('onload1');
    });
    console.log("five js-main-container window load delay 5000");
});
$(function () {
    console.log("six");
    $(window).load(function () {
        setTimeout(function (){
            $('.js-elements-container').addClass('onload2');
        }, 1500);
    });
    console.log("six js-elements-container window load setTimeout 1500");
});

</script>
