"use strict";
/// Readonly Type
/// When you have a configuration object that should not altered after intialization, making it Readonly emsures its properties cannot be changed.
const a = {
    name: 'John',
    age: 30
};
// a.name='john'  
///error : Cannot assign to name it is readonlt properties
