// Map
// maps gives you an even fancier way to deal with objects. very similar to maps  in c++

interface Obj {
    id: string;
    name: string;
}

//Initialize an empty MAP
const userMap = new Map<string, Obj>()

//Add obk to the map using set

userMap.set('1', { id: '1', name: 'John' })
userMap.set('2', { id: '2', name: 'Jane' })

console.log(userMap.get('1'))


