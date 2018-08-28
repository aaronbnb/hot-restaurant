$(document).ready(function() {

// var shouldNutritionFactsShow = true;
//
// $('#restaurant-status').on('click', function() {
//
//
// //Option 1
//   // if(shouldNutritionFactsShow === true) {
//   //   //make facts show
//   //   $('#resources-tabs').css('display', 'block');
//   //   shouldNutritionFactsShow = false;
//   // } else {
//   //     //make facts disappear
//   //     $('#resources-tabs').css('display', 'none');
//   //     shouldNutritionFactsShow = true;
//   // }
//
// if($('#resources-tabs').attr('visible') === 'false') {
//   $('#resources-tabs').css('display', 'block');
//   $('#resources-tabs').attr('visible', 'true');
// } else {
// $('#resources-tabs').css('display', 'none');
// $('#resources-tabs').attr('visible', 'false');
//
// }
//
// });
//
// $('.card').on('click', function() {
//   var alertText = $(this).find('h5').text();
//   $('#click-alert-text').text("You clicked on " + alertText + ". Are you sure that's right")
//   $('#click-alert').css('display', 'flex');
//
// });


$('#username').on("focus", function(event) {
  console.log(event);
  $('#username-info').removeClass('hidden');
})

$('#username').on("blur", function(event) {
  console.log(event);
  $('#username-info').addClass('hidden');
})

$('#confirm-username').on("input", function(event) {
  console.log($(this));
  var confirmed = $(this).val();

  if(confirmed !== $('#username').val().slice(0, confirmed.length)) {
      $('#password-warning').removeClass('hidden');
  } else {
    $('#password-warning').addClass('hidden');
  }
})



});
