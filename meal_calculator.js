function Diner(name, tips) {
  var diner = {};
  diner.name = name;
  diner.tips = tips;
  diner.orders = [];
  diner.subtotal = 0;
  diner.tax = 0;
  diner.tip = 0;
  diner.total = 0;
  return diner;
}

var diners = [
  Diner('Larry', 0.2),
  Diner('Freddy', 0.15),
  Diner('Vic', 0.2),
  Diner('Eddie', 0.17),
  Diner('Mr. Pink', 0)
];

diners[0].orders = [
  {item:'burger', price:5.99},
  {item:'coke', price:1.99}
];
diners[1].orders = [
  {item:'taco plate', price:6.99},
  {item:'iced tea', price:0.99}
];
diners[3].orders = [
  {item:'burger', price:5.99},
  {item:'water', price:0.00}
];
diners[4].orders = [
  {item:'steak', price:9.99},
  {item:'coke', price:1.99}
];

var getCheck = diners.forEach(function(diner) {
  var dinerSubTotal = diner.orders.reduce(function(sum, order) {
    return sum + order.price;
  }, 0);
  diner.subtotal = dinerSubTotal;
  diner.tax = dinerSubTotal * 0.11;
  diner.tax = parseFloat(diner.tax.toFixed(2));
  diner.tip = dinerSubTotal * diner.tips;
  diner.tip = parseFloat(diner.tip.toFixed(2));
  diner.total = diner.subtotal + diner.tax + diner.tip;
});

var printCheck = diners.forEach(function(diner) {
  console.log(diner.name + ' order:');
  diner.orders.forEach(function(order) {
    console.log(' **** ' + order.item + ' -- ' + order.price);
  })
  console.log(' **** Subtotal: ' + diner.subtotal);
  console.log(' **** Tax: ' + diner.tax.toFixed(2));
  console.log(' **** Tip: ' + diner.tip.toFixed(2));
  console.log(' **** Total: ' + diner.total.toFixed(2));
})

// console.log(diners);
