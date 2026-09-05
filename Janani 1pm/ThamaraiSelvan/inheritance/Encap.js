

class Bank{

    constructor(owner, balance){
        // this - current cls reference
        this.owner = owner
        this.balance = balance
    }

    desposite(amount){
        this.balance = this.balance + amount
        console.log(this.balance);
        
    }
}

const bank = new Bank("prakah",500);
desposite(100);