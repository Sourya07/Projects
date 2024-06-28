///  Record 
///  A record is a collection of fields, each of which has a name and a value.

interface Data{
    id:string;
    name:string;
}

type Users = Record<string,Data>;
const users: Users = {
    'abc123': { id: 'abc123', name: 'raj' },
    'xyz789': { id: 'xyz789', name: 'priyanshu' },
  };
  
  console.log(users['abc123']); 
