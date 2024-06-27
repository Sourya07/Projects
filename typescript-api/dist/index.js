"use strict";
//  Partial makes all properties of atype optiona; , creating a type with the smae properties , but each marked as optional
function updateUser(user) {
    console.log(`my name is ${user.name}`);
}
updateUser({
    name: 'sai',
});
