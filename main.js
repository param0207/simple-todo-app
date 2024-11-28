// NUMBER
let a = 1; // VAR is a like a box where you can put anything and also put
const b = 2; // a label to that box so that you can get an idea for what is
const c = 3; // inside the box
console.log((a + b) / c);

// STRING
const name = "Param Chaudhary";
console.log("My name is", name);

// BOOLEAN
let happy = true;
let fun = true;
console.log(happy && fun);
happy = false;
console.log(happy || fun);
console.log(happy && fun && false); // first happy and fun will evaluate

// FUNCTION(encapsulate the logic)
function printVar(variable) {
  return variable;
}

function printName(name, callback) {
  return "Hello " + callback(name);
}

const firstName = printName("Param", printVar);
console.log(firstName);

let sum = (a, b) => a + b;
let sum2 = (a, b) => {
  return a + b;
};

// CALLBACK

setTimeout(() => {
  // async codes that does not run right away by using callback
  console.log("run after 1000ms");
}, 1000);

document.addEventListener("click", () => {
  console.log("clicked"); // callback func
});

const promise = new Promise((resolve, reject) => {
  const sum = 1 + 1;
  if (sum === 2) {
    console.log("success");

    resolve(sum);
  } else {
    reject("error");
  }
});

promise
  .then((mess) => {
    console.log(mess);
  })
  .catch((err) => {
    console.error(err);
  });

// const todos = fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     data.forEach((user) => {
//       console.log(user.name);
//     });
//   });

async function fetchUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  console.log(res);

  const data = await res.json();
  console.log(data);
}

fetchUsers();
