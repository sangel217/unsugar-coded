function User(name, email) {
  this.name = name;
  this.email = email;
  this.carbs = [];
  this.sugars = [];
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

Carbs.prototype.carbTotal(function(){
  return this.breakfast + this.lunch + this.dinner + this.snack


})
