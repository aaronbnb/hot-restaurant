$(document).ready(function() {

var shouldNutritionFactsShow = true;

$('#restaurant-status').on('click', function() {


//Option 1
  // if(shouldNutritionFactsShow === true) {
  //   //make facts show
  //   $('#resources-tabs').css('display', 'block');
  //   shouldNutritionFactsShow = false;
  // } else {
  //     //make facts disappear
  //     $('#resources-tabs').css('display', 'none');
  //     shouldNutritionFactsShow = true;
  // }

if($('#resources-tabs').attr('visible') === 'false') {
  $('#resources-tabs').css('display', 'block');
  $('#resources-tabs').attr('visible', 'true');
} else {
$('#resources-tabs').css('display', 'none');
$('#resources-tabs').attr('visible', 'false');

}

});

$('.card').on('click', function() {
  var alertText = $(this).find('h5').text();
  $('#click-alert-text').text("You clicked on " + alertText + ". Are you sure that's right")
  $('#click-alert').css('display', 'flex');

});





});
