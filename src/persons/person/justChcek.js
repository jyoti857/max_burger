const john = {
    name: "john Doe", 
    balance: 2000,
    deduct(amount) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                this.balance = this.balance - amount;
                // console.log(this)
                resolve(`${this.name} has now new balance of ${this.balance}`);
            }, 2000)
        })
        
    }
}


// console.log(" --> ", john.deduct(200).then(data => console.log(data)))
john.deduct(300).then(data => console.log(data));