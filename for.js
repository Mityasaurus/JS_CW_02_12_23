for (let i = 0; i < 6; i++) {
  console.log(i ** i);
}

const word = "sAmsUNg";

let converted = "";

// for (let i = 0; i < word.length; i++) {
//   if (word[i] === word[i].toUpperCase() ) {
//     converted += word[i].toLowerCase();
//   } else {
//     converted += word[i].toUpperCase();
//   }
// }

const a = "Я в глобальній області";

for (let i = 0; i < word.length; i++) {
  const b = "Я в блочній області видимості";
  if (i === 0) {
    converted += word[i].toUpperCase();
    console.log(a);
  } else {
    converted += word[i].toLowerCase();
  }
}

console.log(converted);
