const accountId = 144553
let accountEmail = "rituraj7326@gmail.com"
var accountPassword = "12345"
accountCity = "Jamshedpur"
let accountState;
// accountState is undefined

// accountId = 2  // const cannot be changed

accountEmail = "rituraj8102@gmail.com"
accountPassword = "212121"
accountCity = "Muzzaffarpur"
console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity,accountState])

// constant can be declared in one way and whose value cannot be changed.

/*
Prefer not to use var
bcoz of issue in block scope and functional scope.
*/