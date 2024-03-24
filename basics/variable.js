const accountId = 14453
let accountEmail="saksham@google.com"
var accountPassword="12345"
accountCity="Palampur" // this is possible but should not be used
let accountState; //; is not necessary and in js it says undefined rather than giving any garbage value
//accountId=2

accountEmail="Saksham@email.com"
accountPassword="13456"
accountCity="Pahra"

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])


/*
Do not use var because it has issue with block and functional scope
*/