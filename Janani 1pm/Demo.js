"use strict";
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["Manager"] = 1] = "Manager";
    Role[Role["Tester"] = 2] = "Tester";
    Role[Role["Developer"] = 3] = "Developer";
})(Role || (Role = {}));
console.log(Role.Admin);
console.log(Role.Manager);
console.log(Role.Tester);
console.log(Role.Developer);
