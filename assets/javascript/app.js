

$(document).ready(function() {

  var database = firebase.database();

  var salesLead = {
    name: "",
    email: "",
  };

$('#contact-submit').on('click', function() {

  salesLead.name = $('#name').val();
  salesLead.email = $('#email').val();

  database.ref().push(salesLead);
});


});
