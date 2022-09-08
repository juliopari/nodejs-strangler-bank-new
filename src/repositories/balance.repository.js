class BalanceRepository {

  constructor(){
    this.balance = [];
  }

  list(){
    const limit = 5;
    for (let index = 0; index < limit; index++) {
      this.balance.push({
        id: ''+index+'',
        date: '2022-09-01',
        amount: '1100.00',
        currency: 'USD',
        status: 'bank-new'
      });
    }

    return this.balance;

  }

}

module.exports = BalanceRepository;
