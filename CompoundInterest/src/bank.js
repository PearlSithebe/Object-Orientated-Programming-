

    class BankAccount{
      constructor(accountNumber,balance,accountType){
          this.accountNumber = accountNumber;
          this.balance = balance;
          this.accountType = accountType;
      }
      Balance(interest,fee){
          if(typeof(this.accountNumber) === "number" && this.balance > 0){
             let x = (this.balance*(interest/12))
             let monthly = "R"+(this.balance + x - fee).toFixed(2)
             return `Account type: ${this.accountType}\nBalance: ${monthly}`
          }else{
              return `Account type: ${this.accountType}\nBalance: 0.00`
          }
      }
      Deposit(amount){
          if(amount > 0 && typeof(amount)==="number"){
              let x = this.balance + amount;
              return `R${amount} was deposited into ${this.accountType} account\nThe current balance is R${x}`
          }
          else{
              return `Deposit declined into ${this.accountType} account\nThe current balance is R${this.balance}`
          }
      }
      Withdrawal(amount){
          if(amount > 0 && typeof(amount)==="number" && amount < this.balance){
              let x = this.balance - amount;
              return `R${amount} was withdrawn from ${this.accountType} account\nThe current balance is R${x}`
          }
          else{
              return `Withdrawal declined from ${this.accountType} account insuficient funds`
          }
      }
      Transfer(accountNumber,amount){
          if(typeof(accountNumber)==="number" && amount>0 && this.balance>=amount){
              let x = this.balance - amount
              return `R${amount} was transfered from ${this.accountType} to account number ${accountNumber}\nBalance: R${x}`
          }
          else{
              return `Transfer declined insufficient funds`
          }
      }
  }