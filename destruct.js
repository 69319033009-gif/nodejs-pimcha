const user = {
  name: "John",
  age: 30,
  email: "john@example.com",
  city: "New York",
};

//console.log(`Name: ${name}, Age: ${age}, Email: ${email}, City: ${city}`);
const { name, age, email, city } = user;
console.log(`Name: ${name}, Age: ${age}, Email: ${email}, City: ${city}`);