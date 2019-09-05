<script>
$(function () {
    console.log("one");
    $('.js-t4form-container').addClass('whoopie1');
    console.log("one js-t4form-container whoopie1 0");
});
$(function () {
    console.log("two");
    setTimeout(function () {
        $('.js-main-container').addClass('whoopie2');
    }, 4000);
    console.log("two js-main-container whoopie2 4000");
});
$(function () {
    console.log("three");
    setTimeout(function () {
        $('.js-elements-container').addClass('whoopie3');
    }, 5000);
    console.log("three js-elements-container whoopie3 5000");
});
$(function () {
    console.log("four");
    setTimeout(function() {
        $('.form-group').addClass('whoopie4');
    }, 5000);
    console.log("four form-group whoopie4 5000");
});
$(function () {
    console.log("five");
    $(window).load(function () {
        setTimeout(function (){
            $('.js-main-container').addClass('onload1');
        }, 2000);    });
    console.log("five js-main-container window onload1 delay 2000");
});
$(function () {
    console.log("six");
    $(window).load(function () {
        setTimeout(function (){
            $('.js-elements-container').addClass('onload2');
        }, 2000);
    });
    console.log("six js-elements-container window onload2 setTimeout 2000");
});
$(function () {
    console.log("seven");
    $(window).load(function () {
        setTimeout(function (){
            $('#input-28832').addClass('onload3');
        }, 2000);
    });
    console.log("seven destinationDropDownMenu window onload3 setTimeout 2000");
});


</script>
