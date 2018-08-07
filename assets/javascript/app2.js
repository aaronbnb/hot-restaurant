
$(document).ready(function() {

  var database = firebase.database();



$('#contact-submit').on('click', function() {
  var salesLead = {
    name: $('#name').val(),
    email: $('#email').val(),
  };

  database.ref().push(salesLead);
});


});
