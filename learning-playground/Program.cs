using learning_playground.BankAccount;




string line = "-----------------------";
BankAccount user;

while (true)
{
    Console.WriteLine(line);
    Console.Write("Enter amount to create account: ");

    if (double.TryParse(Console.ReadLine(), out double initialAmount)){
        user = new BankAccount(initialAmount);
        Console.WriteLine($"Successfully created account with {initialAmount} initial amount");
        break;
    }
    else
    {
        Console.WriteLine("Error try again!");
    }
}




while (true)
{
    Console.WriteLine(line);
    Console.Write("Action:\n" +
        "[1] Check Balance\n" +
        "[2] Deposit\n" +
        "[3] Withdraw\n" +
        "[0] Exit: ");
    string choice = Console.ReadLine();
    switch (choice)
    {
        case "1":
            Console.WriteLine(line);
            Console.WriteLine($"Balance: {user.Amount}");
            continue;
        case "2":
            Console.WriteLine(line);
            Console.Write("Enter amount to Deposit:");
            if (double.TryParse(Console.ReadLine(), out double depositMoney))
            {
                if (user.Deposit(depositMoney))
                {
                    Console.WriteLine(line);
                    Console.WriteLine($"Successfully deposit {depositMoney}\n" +
                        $"New Balance: {user.Amount}");
                    continue;
                }
                else
                {
                    continue;
                }
            }
            else
            {
                continue;
            }

        case "3":

            Console.WriteLine(line);
            Console.Write("Enter amount to Deposit:");
            if (double.TryParse(Console.ReadLine(), out double withdrawMoney))
            {
                if (user.Withdraw(withdrawMoney))
                {
                    Console.WriteLine(line);
                    Console.WriteLine($"Successfully withdrawn {withdrawMoney}\n" +
                        $"New Balance: {user.Amount}");
                    continue;
                }
                else
                {
                    continue;
                }
            }
            else
            {
                continue;
            }

        case "0":
            break;
        default:
            Console.WriteLine(line);
            Console.WriteLine("Try again: enter 1-4");
            Console.WriteLine(line);
            continue;
    }



}