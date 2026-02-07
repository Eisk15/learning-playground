namespace learning_playground.BankAccount
{
    class BankAccount
    {
        public double Amount { get; set; }


        public BankAccount(double money)
        {
            if (money < 2000)
            {
                throw new Exception("Minimum P2000 required!");
            }
            else
            {
                Amount = money;
            }
        }


        public bool Deposit(double money)
        {
            if (money <= 0)
            {
                return false;
            }
            else
            {
                Amount += money;
                return true;
            }
        }

        public bool Withdraw(double money)
        {
            if (money > Amount || money <= 0)
            {
                return false;
            }
            else
            {
                Amount -= money;
                return true;
            }
        }
    }

}



    
