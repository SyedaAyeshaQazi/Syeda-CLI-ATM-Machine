#! /usr/bin/env node
import inquirer from "inquirer";

let mybalance = 10000;
let mypin = 26328;

const pinAnswere = await inquirer.prompt(
    {
       name : "YourEnteredPin",
       message : "enter your pin",
       type : "number"
    }
)
// console.log(pinAnswere.YourEnteredPin);

if(pinAnswere.YourEnteredPin === mypin) {
    console.log("correct pin!!!");

    const operationAnsweres = await inquirer.prompt(
            {
           name : "operation",
           message : "Please Select Option",
           type : "list",
           choices : ["Withdraw" , "Check Balance"]
        }
    );

    if(operationAnsweres.operation === "Withdraw"){
        const amountAnswere = await inquirer.prompt(
            [
                {
                    name : "Amount",
                    message : "Enter Your Amount",
                    type : "number"
                }
            ]
        );

        if(mybalance >= amountAnswere.Amount){

           const remaining = mybalance - amountAnswere.Amount
            console.log(`Your Remaining Balance is ${mybalance}`);
        }else{
            console.log("Insufficient Balance");
        }
        

        
    }else if(operationAnsweres.operation === "Check Balance"){
           console.log(`Your Current Balance is ${mybalance}`);
        
    }
}


else{
    console.log("incorrect pin");
}
