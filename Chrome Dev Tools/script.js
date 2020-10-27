const dogs = [
  { name: "Snickers", age: 2 },
  { name: "hugo", age: 8 },
];

function makeGreen() {
  const p = document.querySelector("p");
  p.style.color = "#BADA55";
  p.style.fontSize = "50px";
}

// Regular
console.log("HI");
// Interpolated
console.log("Hello I am a %s string!", "human");

// Styled
console.log("%c I am a great text", "font-size:50px");
// warning!
console.warn("OH NOOOOO");
// Error :|
console.error("SHIT");
// Info
console.info("crocadiles eat people");
// Testing
const p = document.querySelector("p");

console.assert(p.classList.contains("ouch"), "that is wrong");
// clearing
console.clear();
// Viewing DOM Elements
console.log(p);

// Grouping together
dogs.forEach((dog) => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`this is  ${dog.name}`);
  console.log(`he is  ${dog.age}`);
  console.groupEnd(`${dog.name}`);
});
// counting
console.count("Wes");
console.count("Wes");
console.count("Wes");
console.count("Wes");
// timing
console.time("fetching data");
fetch("https://api.github.com/users/wesbos")
  .then((data) => data.json())
  .then((data) => {
    console.timeEnd("fetching data");
    console.log(data);
  });

console.table(dogs);
