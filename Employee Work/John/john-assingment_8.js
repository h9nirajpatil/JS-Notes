//  BankAccount Class
class BankAccount {
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
  }
  deposit(amount) {
    this.balance += amount;
  }
  withdraw(amount) {
    this.balance -= amount;
  }
}

// SavingsAccount Class
class SavingsAccount extends BankAccount {
  constructor(name, balance, interestRate) {
    super(name, balance);
    this.interestRate = interestRate;
  }
  addInterest() {
    this.balance += ((this.balance * this.interestRate) / 100);
  }
}

// creating a client account eith initial deposit
let john_sa = new BankAccount("John", 20000);

// depositing money;
john_sa.deposit(20000);
// console.log(john_sa);

// withdrawing money
john_sa.withdraw(5000);
// console.log(john_sa);

// instance of SavingsAccount
let wesley_sa = new SavingsAccount("Wesley", 50000, 3);
// console.log(wesley_sa);

// calling add intrest method
wesley_sa.addInterest();
// console.log("balance after adding intrest is ", wesley_sa.balance);

// CheckingAccount Class
class CheckingAccount extends BankAccount {
  constructor(name, balance) {
    super(name, balance)
    this.overdraft = 25000;
  }

  withdraw(amount) {
    if (this.balance < amount) {
      this.balance = this.balance -amount;
    } else {
      this.balance-=amount;
    }
  }
}

// instance of CheckingAccount Class
let natasha_ca = new CheckingAccount("Natasha", 3000);
// console.log(checkingAcc);

natasha_ca.withdraw(15000);
// console.log(checkingAcc.balance);



