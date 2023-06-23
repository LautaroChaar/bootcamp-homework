// Homework class 6
// Given an array of objects which contains character of Marvel, filter the characters that are members of X-Men.

const super_heros = [
  { hero: "Spider-Man", group: "Avengers" },
  { hero: "Iron-Man", group: "Avengers" },
  { hero: "Hulk", group: "Avengers" },
  { hero: "DeadPool", group: "None" },
  { hero: "Black Cat", group: "None" },
  { hero: "Wolverine", group: "X-Men" },
  { hero: "Professor X", group: "X-Men" },
  { hero: "Cable", group: "X-Men" },
];

const members_xmen = super_heros.filter( superHero => superHero.group === "X-Men" );

console.log('X-Men Heros', members_xmen);

// Given two arrays of objects one with members of Avengers and one with members of X-Men, find the characters that are on both teams.

const avengers = [
  { hero: "Spider-Man" },
  { hero: "Iron-Man" },
  { hero: "Hulk" },
  { hero: "Scarlet Witch" },
  { hero: "Firestar" },
  { hero: "Sunspot" },
];

const x_men = [
  { hero: "Scarlet Witch" },
  { hero: "Wolverine" },
  { hero: "Professor X" },
  { hero: "Cable" },
  { hero: "Sunspot" },
];

const both_teams = [];

x_men.forEach( character => {
  if ( avengers.some( avenger => avenger.hero === character.hero ) ) {
    both_teams.push(character.hero);
  }
});

console.log('Both Teams Heros', both_teams);

// Homework class 7
// Given an array of Marvel characters, create a function that sorts them by release date and then shows the list in HTML format.

const fragment = document.createDocumentFragment();
const herosList = document.getElementById("marvelHeros");

const marvel_heros = [
  { hero: "Spider-Man", group: "Avengers", releaseDate: new Date(1962, 8) },
  { hero: "Iron-Man", group: "Avengers", releaseDate: new Date(1970, 5) },
  { hero: "Hulk", group: "Avengers", releaseDate: new Date(1962, 5) },
  { hero: "DeadPool", group: "None", releaseDate: new Date(1991, 2) },
  { hero: "Black Cat", group: "None", releaseDate: new Date(1979, 6) },
  { hero: "Wolverine", group: "X-Men", releaseDate: new Date(1982, 12) },
];

const showHeros = array => {
  array.sort((a, b) => a.releaseDate - b.releaseDate);
  array.forEach( item => {
    const li = document.createElement("LI");
    li.textContent = `${item.hero} was released on ${item.releaseDate}. Group: ${item.group}.`
    fragment.appendChild(li);
  })
  herosList.appendChild(fragment);
}

showHeros(marvel_heros);