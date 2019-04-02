function Contact(first, last, email) {
  this.firstName = first;
  this.lastName = last;
  this.firstEmail = email;

}

Contact.prototype.fullContact = function() {
  return this.firstName + " " + this.lastName + " " + this.firstEmail;
}

function resetFields() {
    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input#new-first-email").val("");
}

$(document).ready(function() {
$("form#new-contact").submit(function(event) {
  event.preventDefault();

  var inputtedFirstName = $("input#new-first-name").val();
  var inputtedLastName = $("input#new-last-name").val();
  var inputtedFirstEmail = $("input#first-email").val();
  var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedFirstEmail);

  $("ul#contacts").append("<li><span class='contact'>" + newContact.fullContact() + "</span></li>");

  resetFields();

  $(".contact").last().click(function() {
    $("#show-contact").show();
    $("#show-contact h2").text(newContact.fullContact());
    $(".first-name").text(newContact.firstName);
    $(".last-name").text(newContact.lastName);
    $(".first-email").text(newEmail.firstEmail);

    $("form").not().css("display","none");
  });
  });
})
