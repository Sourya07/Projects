"use strict";
//   HOW TO USE PICK 
//   It is used to select the only input that you want to change  
//  here we are selecting only name and email from user interface
function displaying(user) {
    console.log(`NAME is ${user.name},Email: ${user.email}`);
}
displaying({
    name: 'Rahul',
    email: 'rahul@gmail.com',
});
