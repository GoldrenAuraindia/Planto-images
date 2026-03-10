const fs = require("fs");
const path = require("path");

const folder = "./plants";
const username = "YOUR_USERNAME";
const repo = "plant-images";

const files = fs.readdirSync(folder);

const plants = files.map((file, index) => {
  const name = file
    .replace(".webp", "")
    .replace(".jpg", "")
    .replace(".png", "")
    .replace(/_/g, " ");

  return {
    id: index + 1,
    name: name,
    image: `https://cdn.jsdelivr.net/gh/${username}/${repo}/plants/${file}`
  };
});

fs.writeFileSync("plants.json", JSON.stringify(plants, null, 2));