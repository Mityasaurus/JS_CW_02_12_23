// const friends = ["a", "b", "c", "d", 5, 12, true];
// console.log(friends);
// console.table(friends);

// const a = 10;
// const b = a;

// console.log(a === b);

// let c = [1, 2, 3];
// const d = c;
// c = [1, 2, 3, 4];

// console.log(c, d);

//for of

const friends = ["Sofia", "Bogdan", "Igor", "Volodymir"];

for (let i = 0; i < friends.length; i++) {
  friends[i] += `-${i}`;
}

for (let friend of friends) {
  console.log(friend.toUpperCase());
}

console.table(friends);

const cart = [54, 33, 45, 56, 12, 23, 3];

let result = 0;
for (const num of cart) {
  result += num;
}

console.log(result);

const numbers = [51, 18, 13, 24, 7, 85, 19];
let min = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] < min) {
    min = numbers[i];
  }
}

console.log(min);

const logins = ["m4ngoDoge", "k1widab3st", "poly1scute", "aj4xth3m4n"];
const loginToFind = "aj4xth3m4n";

for (const login of logins) {
  if (loginToFind === login) {
    console.log("Користувача знайдено");
    break;
  }
}
