//   HOW TO USE PICK 
//   It is used to select the only input that you want to change  

interface User {
    id:number;
    name:string;
    email:string;
    createdAt:Date;

}

type UserProfile =  Pick<User, 'name' | 'email'>

//  here we are selecting only name and email from user interface
function displaying (user: UserProfile){
console.log(`NAME is ${user.name},Email: ${user.email}`)
}

displaying({
   
    name:'Rahul',
    email:'rahul@gmail.com',
 
})