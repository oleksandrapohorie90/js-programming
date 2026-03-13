/*
Attributes:
employeeName
salary
...
Methods:
work()
...

Inheritance is supported in JS
*/

class Employee {
  constructor(employeeName, salary) {
    this.employeeName = employeeName;
    this.salary = salary;
  }

  work() {
    console.log(`${this.employeeName} is working...`);
  }
}

let employee1 = new Employee("Alice", 50000);
console.log(employee1.employeeName); // Output: Alice
console.log(employee1.salary); // Output: 50000
employee1.work(); // Output: Alice is working...

let employee2 = new Employee("Bob", 60000);
console.log(employee2.employeeName); // Output: Bob
console.log(employee2.salary); // Output: 60000
employee2.work(); // Output: Bob is working...

console.log("======================");
/*
Create a class named Item with the following requirements:
Attributes: name, price, quanity

Methods: constructir, define and initialize the attributes
calcPrice: calculate the total price of item

*/

class Item {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  calcPrice() {
    return this.price * this.quantity;
  }
}

let item1 = new Item("Apple", 2.5, 10);
console.log(`Total price for ${item1.name}: $${item1.calcPrice()}`); // Output: Total price for Apple: $25

let item2 = new Item("Banana", 1.0, 5);
console.log(`Total price for ${item2.name}: $${item2.calcPrice()}`); // Output: Total price for Banana: $5
