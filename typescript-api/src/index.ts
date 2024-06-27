//  Partial makes all properties of atype optiona; , creating a type with the smae properties , but each marked as optional

/// it is useful when you want to do updates 


interface User{
    id:number;
    name:string;
    age:string;
    email:string;
    password:string;
}


type UpdatePropos = Partial<(Pick<User, 'name' | 'age' |'email'>)>

function updateUser(user: UpdatePropos){
console.log(`my name is ${user.name}`)
}

updateUser({
    name:'sai',
})