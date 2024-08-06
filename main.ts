#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let currency:any = {
    USD:1,  // Base Currency
    EUR:0.9,
    PKR:278,
    AUD:1.53
};

let userAns = await inquirer.prompt([
  {
    name: "from",
    type: "list",
    message: "Which currency do you want to convert?",
    choices: ["PKR","EUR", "USD", "AUD"]
  },

  {
    name: "to",
    type: "list",
    message: "In which currency do you want to convert?",
    choices: ["PKR","EUR", "USD", "AUD"],
  },
  {
    name:"amount",
    type:"input",
    message:"Enter amount",
  },
]);

let fromAmount = currency[userAns.from]
let toAmount = currency[userAns.to]
let amount = userAns.amount
let baseamount = amount/fromAmount
let convertedAmount = baseamount*toAmount
console.log(`convertedAmount = ${chalk.green(Math.round(convertedAmount))}`); 