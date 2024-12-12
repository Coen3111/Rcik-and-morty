// Dimension Generator
const adjectives = ["Evil", "Upside-Down", "Pixelated", "Quantum", "Alien", "Tiny"];
const nouns = ["Planet", "Realm", "Dimension", "World", "Galaxy", "Zone"];
const properties = [
  "Gravity is reversed", 
  "Everyone is a robot", 
  "Time loops forever", 
  "Cats are the dominant species",
  "Humans evolved into blobs",
  "Pizza is the national currency"
];

function generateDimension() {
  const name = `${adjectives[Math.floor(Math.random() * adjectives.length)]} ${nouns[Math.floor(Math.random() * nouns.length)]}`;
  const property = properties[Math.floor(Math.random() * properties.length)];
  return { name, property };
}

// Character Generator
const characters = ["Rick", "Morty", "Summer", "Beth", "Jerry"];
const traits = ["Evil", "Genius", "Lazy", "Buff", "Alien", "Tiny", "Cactus"];
const quirks = [
  "has three eyes", 
  "talks in rhymes", 
  "is always hungry", 
  "is scared of portals", 
  "invented a time machine"
];

function generateCharacter() {
  const name = characters[Math.floor(Math.random() * characters.length)];
  const variant = traits[Math.floor(Math.random() * traits.length)];
  const quirk = quirks[Math.floor(Math.random() * quirks.length)];
  return `${variant} ${name} (${quirk})`;
}

// Timeline Event Generator
const events = [
  "Aliens invaded and won.",
  "Humans evolved into lizards.",
  "Time flows backward.",
  "Gravity is optional.",
  "Everyone can fly but forgets how to walk.",
  "All technology stopped working."
];

function generateTimeline() {
  return events[Math.floor(Math.random() * events.length)];
}

// Travel Function
function travel() {
  const dimension = generateDimension();
  const character = generateCharacter();
  const timeline = generateTimeline();

  document.getElementById("dimension-display").innerHTML = `<h2>Welcome to ${dimension.name}</h2><p>${dimension.property}</p>`;
  document.getElementById("character-display").innerHTML = `<h3>Meet: ${character}</h3>`;
  document.getElementById("timeline-display").innerHTML = `<p>Timeline Event: ${timeline}</p>`;
}
