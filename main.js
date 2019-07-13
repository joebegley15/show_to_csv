console.log("started");

const fs = require("fs");
const shows = fs
  .readFileSync("./file.txt")
  .toString()
  .split("\n")
  .map(show => {
    show = show.split("-")[1];
    if (show) {
      return show.trim();
    }
  })
  .filter(show => !!show);

fs.writeFile("shows.csv", shows.join("\n"), () => {
  console.log("done");
});
