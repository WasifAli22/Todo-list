import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        name: "userid",
        type: "input",
        message: "Enter Your ID"
    },
    {
        name: "userpin",
        type: "number",
        message: "Enter Your PIN"
    },
    {
        type: "list",
        name: "accountType",
        choices: ["current", "saving"],
        message: "Seclect your account type: "
    },
    {
        type: "list",
        name: "transactionType",
        choices: ["fastcash", "Withdrawl"],
        message: "Seclect your transaction",
        when(answers) {
            return answers.accountType;
        }
    },
    {
        type: "list",
        name: "amount",
        choices: [1000, 2000, 10000, 20000],
        message: "Seclect your amount",
        when(answers) {
            return answers.transactionType == "fastcash";
        }
    },
    {
        type: "number",
        name: "amount",
        message: "Enter your amount",
        when(answers) {
            return answers.transactionType == "Withdrawl";
        }
    }
]);
if (answers.userid && answers.userpin) {
    const balance = Math.floor(Math.random() * 100000000);
    // console.log(balance);
    const EnteredAmount = answers.amount;
    if (balance >= EnteredAmount) {
        const remaining = balance - EnteredAmount;
        console.log(`Your remaining balance is  ${remaining}`);
    }
    else {
        console.log("Insufficent balance");
    }
}
