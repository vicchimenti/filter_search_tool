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
    $('.js-t4form-container iframe').contents().find('.js-main-container').addClass('whoopie4');
    console.log("four js-t4form-container iframe contents find js-main-container");
});
$(function () {
    console.log("five");
    $('.js-elements-container').contents().addClass('whoopie5');
    console.log("five .js-elements-container contents");
});
$(function (){
    console.log("six");
    setInterval(function() {
        parent.postMessage("Hello", "formbankUri");
    }, 1000);
    console.log("six postMessage formbankUri");
});
</script>
