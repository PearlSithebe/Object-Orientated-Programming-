describe("BankAccount", function(){
    it("should return a number if asked for an account number, return a number for the balance and a string for the account type",function(){
        let details = new BankAccount(1469315675,1000,"Current");
        expect(typeof(details.accountNumber)).toBe("number")
        expect(typeof(details.balance)).toBe("number")
        expect(typeof(details.accountType)).toBe("string")

    })
    it("should be able to calculate the monthly balance with interest and monthly fees", function(){
        let balance = new BankAccount(146931569275,1000,"Current");
        expect(balance.Balance(5,56)).toBe(`Account type: Current\nBalance: R1360.67`)
    })
    it("should be able to make deposits into an account", function(){
        let deposit = new BankAccount(146931569275,1000,"Current")
        expect(deposit.Deposit(500)).toBe(`R500 was deposited into Current account\nThe current balance is R1500`)
        expect(deposit.Deposit(0)).toBe(`Deposit declined into Current account\nThe current balance is R1000`)
    })
    it("should be able to make withdrawals from the account", function(){
        let withdraw = new BankAccount(146931569275,10000,"Current")
        expect(withdraw.Withdrawal(500)).toBe(`R500 was withdrawn from Current account\nThe current balance is R9500`)
        expect(withdraw.Withdrawal(20000)).toBe(`Withdrawal declined from Current account insuficient funds`)
    })
    it("should be able to transfer money from the account to another account",function(){
        let transfer = new BankAccount(146931569275,1000,"Current")
        expect(transfer.Transfer(1426895628,100)).toBe("R100 was transfered from Current to account number 1426895628\nBalance: R900")
    })
})