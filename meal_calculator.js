function Restaurant(name) {
  var restaurant = {};
  restaurant.name = name || 'Hattie B\' Hot Chicken';
  restaurant.customers = [];
  restaurant.createCustomer = function(name,tips) {
    restaurant.customers.push(Diner(name,tips));
  }
  restaurant.test = function() {
    restaurant.customers.forEach(function(customer) {
      console.log(customer);
    })
  }
  restaurant.ringUpBill = function() {
    restaurant.customers.forEach(function(customer) {
      customer.getCheck();
    })
  }
  restaurant.printCheck = function() {
    restaurant.customers.forEach(function(customer) {
      console.log(customer.name + ' order:');
      customer.orders.forEach(function(order) {
        console.log(' **** ' + order.item + ' -- ' + order.price);
      })
      console.log(' **** Subtotal: ' + customer.subtotal);
      console.log(' **** Tax: ' + customer.tax.toFixed(2));
      console.log(' **** Tip: ' + customer.tip.toFixed(2));
      console.log(' **** Total: ' + customer.total.toFixed(2));      
    })
  }  
  return restaurant;
}

function Diner(name, tips) {
  var diner = {};
  diner.name = name;
  diner.tips = tips;
  diner.orders = [];
  diner.subtotal = 0;
  diner.tax = 0;
  diner.tip = 0;
  diner.total = 0;
  diner.nameChange = function(newName) { 
    diner.name = newName 
  }
  diner.addOrderItem = function(name,price) {
    diner.orders.push({item:name,price:price})
  }
  diner.getCheck = function() {
    diner.subtotal = diner.orders.reduce(function(sum, order) {
      return sum + order.price;
    }, 0)
    diner.tax = diner.subtotal * 0.11;
    diner.tax = parseFloat(diner.tax.toFixed(2));
    diner.tip = diner.subtotal * diner.tips;
    diner.tip = parseFloat(diner.tip.toFixed(2));
    diner.total = diner.subtotal + diner.tax + diner.tip;
  }
  return diner;
}

var melrose = Restaurant('Melrose');

melrose.createCustomer('Larry', 0.2);
melrose.createCustomer('Freddy', 0.15);
melrose.createCustomer('Vic', 0.2);
melrose.createCustomer('Eddie', 0.17);
melrose.createCustomer('Mr. Pink', 0);

var diners = melrose.customers;

diners[0].nameChange('Mr. Orange');

diners[1].addOrderItem('taco plate',6.99);
diners[1].addOrderItem('iced tea',0.99);
diners[0].addOrderItem('burger',5.99);
diners[0].addOrderItem('coke',1.99);
diners[3].addOrderItem('burger',5.99);
diners[3].addOrderItem('water',0.00);
diners[4].addOrderItem('steak',9.99);
diners[4].addOrderItem('coke',1.99);
diners[2].addOrderItem('fries',2.19);
diners[2].addOrderItem('jalapeno burger', 7.99);
diners[2].addOrderItem('chocolate shake', 3.99);


melrose.ringUpBill();
melrose.printCheck();