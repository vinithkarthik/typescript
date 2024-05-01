console.log('hiiiiii');

enum Role { ADMIN, READ_ONLY, WRITE_ONLY };

const person: {
  name: string;
  age: number;
  hobbies: string[];
  registrationDate: [number, string];
  role: Role;
} = {
  name: 'vinith',
  age: 30,
  hobbies: ['football', 'reading'],
  registrationDate: [12, 'november'],
  role: Role.ADMIN
}

console.log('==role', person.role);