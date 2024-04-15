#! /usr/bin/env node

import inquirer from "inquirer";
let todoslist: string[] = [];
let condition = true;


let main = async () => {
  while (condition) {
    let option = await inquirer.prompt([
      {
        name: "choices",
        type: "list",
        message: "\n select an option \n",
        choices: [
          "Addtask",
          "delet",
          "updateTask",
          "viewyourTodos",
          "existProgram",
        ],
      },
    ]);

    if (option.choices === "Addtask") {
      await add();
    } else if (option.choices === "delet") {
      await delet();
    } else if (option.choices === "updateTask") {
      await update_Task();
    } else if (option.choices === "viewyourTodos") {
      await viewtask();
    } else if (option.choices === "existProgram") {
      condition = false;
    }
  }
};
let add = async () => {
  let newtask = await inquirer.prompt([
    { name: "task", type: "input", message: "write your new task here" },
  ]);
  todoslist.push(newtask.task);
  console.log(`\n "${newtask.task}" is your task added succesfully \n `);
};
let viewtask = async () => {
  console.log(`\n here is your todos list:\n`);
  todoslist.forEach((newtask, index) => {
    console.log(`${index}:${newtask}`);
  });
};
//  delet fuction
let delet = async () => {
  let deletyourtask = await inquirer.prompt([
    {
      name: "index",
      type: "number",
      message:
        "what would you like to delet in your todos enter a index number:",
    },
  ]);
  let delet = todoslist.splice(deletyourtask.index, 1);
  console.log(`"${delet}" is deleted successfully from your todos`);
};
let update_Task = async () => {
  await viewtask();
  let update_task_index = await inquirer.prompt([
    {
      name: "index",
      type: "number",
      message:
        "what task you want to update plaese enter your index number which you wanna update:",
    },
    {
      name: "new_task",
      type: "input",
      message: "write your new task here",
    },
  ]);
  todoslist[update_task_index.index] = update_task_index.new_task
  console.log (`\n task at index number ${update_task_index.new_Task} is updated succesfully[for updated list check option:"view todoslist]\n`);
};
main();
