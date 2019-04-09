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


Sugars.prototype.sugarAlert = function(){
  if(this.sugars >= 350){
    alert("You're sugar is high, consider calling your doctor!")
  } else if(this.sugars <= 70){
    alert("You're sugar is low, consider calling your doctor!")
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

  $('#log').click(function(e){
    e.preventDefault();
    var b1 = $('#breakfast1').val();
    var b2 = $('#breakfast2').val();
    var b3 = $('#breakfast3').val();
    var inputBCarbs1 = parseInt($('input#b-carbs1').val());
    var inputBCarbs2 = parseInt($('input#b-carbs2').val());
    var inputBCarbs3 = parseInt($('input#b-carbs3').val());
    var bCarbTotal = inputBCarbs1 + inputBCarbs2 + inputBCarbs3;

    var l1 = $('#lunch1').val();
    var l2 = $('#lunch2').val();
    var l3 = $('#lunch3').val();
    var inputLCarbs1 = parseInt($('input#l-carbs1').val());
    var inputLCarbs2 = parseInt($('input#l-carbs2').val());
    var inputLCarbs3 = parseInt($('input#l-carbs3').val());
    var lCarbTotal = inputLCarbs1 + inputLCarbs2 + inputLCarbs3;

    var d1 = $('#dinner1').val();
    var d2 = $('#dinner2').val();
    var d3 = $('#dinner3').val();
    var inputDCarbs1 = parseInt($('input#d-carbs1').val());
    var inputDCarbs2 = parseInt($('input#d-carbs2').val());
    var inputDCarbs3 = parseInt($('input#d-carbs3').val());
    var dCarbTotal = inputDCarbs1 + inputDCarbs2 + inputDCarbs3;

    var s1 = $('#snack1').val();
    var s2 = $('#snack2').val();
    var s3 = $('#snack3').val();
    var inputSCarbs1 = parseInt($('input#s-carbs1').val());
    var inputSCarbs2 = parseInt($('input#s-carbs2').val());
    var inputSCarbs3 = parseInt($('input#s-carbs3').val());
    var sCarbTotal = inputSCarbs1 + inputSCarbs2 + inputSCarbs3;

    if(bCarbTotal + lCarbTotal + dCarbTotal + sCarbTotal >= 181){
      alert("You should consider lowering your daily carb intake! The recommended daily total amount is 180 grams. Each meal should have a total of 60 grams and snacks no more than 15 grams.")
    } else if(this.breakfast + this.lunch + this.dinner + this.snack <= 44){
      alert("You should consider increasing your daily carb intake. Each meal should have 15-60 grams of carbs and no more than 15 grams of carbs for snacks.")
    } else {
      alert("Great job with your carb counting!")
    }

    $("ul#contacts").append("<span>" + bCarbTotal + lCarbTotal + dCarbTotal + sCarbTotal + "</span>");
    console.log(bCarbTotal);

    resetFields();

  })
})
