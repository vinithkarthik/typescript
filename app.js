console.log('hiiiiii');
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["WRITE_ONLY"] = 2] = "WRITE_ONLY";
})(Role || (Role = {}));
;
var person = {
    name: 'vinith',
    age: 30,
    hobbies: ['football', 'reading'],
    registrationDate: [12, 'november'],
    role: Role.ADMIN
};
console.log('==role', person.role);
