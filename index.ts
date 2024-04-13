#! /usr/bin/env node

import inquirer from "inquirer"; // use inquirer pkg
import chalk from "chalk"; // use chalk pkg


console.log(chalk.green.bold.italic("\n \tWelcome to my project 'Currency Converter'"));
console.log(chalk.blue.italic("\t          -----Ansharah Khan-----\n"));


// Define the currencies and thier exchange rates

let exchange_rate:any = {
    "USD": 1,  // Base currency
    "EUR": 0.9, // European Currency(Euro)
    "JYP": 113, // Japenese Currency(yen)
    "CAD": 1.3, // Canadian Currency(Doller)
    "AUD": 1.65, // Australian Doller
    "PKR": 200 // Pakistani Rupees
    // Add more currencies and thier exchange rates here
};

// Prompt the user to select currencies to convert from and to

let User_Answer = await inquirer.prompt([
    {
        name: "From_Currency",
        type: "list",
        message: "Select the currency to convert from: ",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name:  "To_Currency",
        type: "list",
        message: "Select the currency to convert into: ",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "Amount",
        type: "input",
        message: "Enter the amount to Convert: "
    }
]);

// Perform currency converters by using Formula

let From_Amount = exchange_rate[User_Answer.From_Currency];
let  To_Amount = exchange_rate[User_Answer.To_Currency];
let amount = User_Answer.Amount 

// Formula of conversion

let base_amount = amount / From_Amount
let converted_amount = base_amount * To_Amount

// Display the converted amount

console.log(chalk.red.italic(`Converted Amount = ${chalk.green(converted_amount.toFixed(2))}`));