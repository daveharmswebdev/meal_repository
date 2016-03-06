function Diner(name, tips) {
  var diner = {};
  diner.name = name;
  diner.tips = tips
  return diner;
}

var diners = [Diner('Larry', true),Diner('Freddy', true),Diner('Vic', true),Diner('Eddie', true),Diner('Mr. Pink', false)];

diners[0].meal = [{item:'burger', price:'5.99'},{item:'coke', price:'1.99'}];
diners[1].meal = [{item:'taco plate', price:'6.99'},{item:'iced tea', price:'0.99'}];
diners[2].meal = [{item:'pancakes', price:'4.99'},{item:'coffee', price:'1.49'}];
diners[3].meal = [{item:'burger', price:'5.99'},{item:'water', price:'0.00'}];
diners[4].meal = [{item:'steak', price:'9.99'},{item:'coke', price:'1.99'}];

var check = diners.forEach(function(diner) {
  console.log(diner.meal);
});
