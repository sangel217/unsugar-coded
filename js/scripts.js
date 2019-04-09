function User(first, last, email) {
  this.firstName = first;
  this.lastName = last;
  this.email = email;
  this.carbs = [];
  this.sugars = [];
}

User.prototype.fullContact = function() {
  return this.firstName + " " + this.lastName + " " + this.email;
}

function Carbs(breakfast, lunch, dinner, snack) {
  this.breakfast = breakfast;
  this.lunch = lunch;
  this.dinner = dinner;
  this.snack = snack;
}

function Sugars(breakfast, lunch, dinner, snack) {
  this.breakfast = breakfast;
  this.lunch = lunch;
  this.dinner = dinner;
  this.snack = snack;
}

Carbs.prototype.carbTotal = function(){
  return (this.breakfast + this.lunch + this.dinner + this.snack);
}

Carbs.prototype.carbAlert = function(){
  if(this.breakfast + this.lunch + this.dinner + this.snack >= 181){
    return("You should consider lowering your daily carb intake! The recommended daily total amount is 180 grams. Each meal should have a total of 60 grams and snacks no more than 15 grams.")
  } else if(this.breakfast + this.lunch + this.dinner + this.snack <= 44){
    return("You should consider increasing your daily carb intake. Each meal should have 15-60 grams of carbs and no more than 15 grams of carbs for snacks.")
  } else {
    return("Great job with your carb counting!")
  }
}

Sugars.prototype.sugarAlert = function(){
  if(this.sugars >= 350){
    return("You're sugar is high, consider calling your doctor!")
  } else if(this.sugars <= 70){
    return("You're sugar is low, consider calling your doctor!")
  }
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
  var newContact = new User(inputtedFirstName, inputtedLastName, inputtedFirstEmail);


  $("ul#contacts").append("<li><span class='contact'>" + newContact.fullContact() + "</span></li>");

  resetFields();

  $(".contact").last().click(function() {
    $("#show-contact").show();
    $("#show-contact h2").text(newContact.fullContact());
    $(".first-name").text(newContact.firstName);
    $(".last-name").text(newContact.lastName);
    $(".first-email").text(newContact.email);

  });

  $("form#new-contact").not().css("display", "none");
  });

  $('#log').click(function(event){
    event.preventDefault();
    var inputBCarbs = parseInt($('input#b-carbs').val());
    var inputLCarbs = parseInt($('input#l-carbs').val());
    var inputDCarbs = parseInt($('input#d-carbs').val());
    var inputSCarbs = parseInt($('input#s-carbs').val());
    var newTotalCarbs = new Carbs(inputBCarbs, inputLCarbs, inputDCarbs, inputSCarbs);

    $('.results').append('<p>' + "You're total carbs for today is:" + ' ' + newTotalCarbs.carbTotal() + '</p>');
    $('.results').append('<p>' + newTotalCarbs.carbAlert() + '</p>');

    var inputBSugar = parseInt($('input#b-sugar').val());
    var inputLSugar = parseInt($('input#l-sugar').val());
    var inputDSugar = parseInt($('input#d-sugar').val());
    var inputSSugar = parseInt($('input#s-sugar').val());
    var newSugarAlert = new Sugars(inputBSugar, inputLSugar, inputDSugar, inputSSugar)

    $('.results').append('<p>' + newSugarAlert.sugarAlert() + '</p>')

  })
})
