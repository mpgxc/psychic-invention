import getPalleteColors from "./getPalleteColors";
import readImageToBuffer from "./readImageToBuffer";
import createScrapPage from "./services/createScrapPage.Service";
import createColorSimilarity from "./services/createColorSimilarity.Service";

// const image = readImageToBuffer("./tmp/person.jpg");

// getPalleteColors(image, "jpg").then(console.log);

// createScrapPage().then();

const resultMatch = createColorSimilarity("#673524", "#955135");

console.log("Delta: ", resultMatch.deltae);
console.log("Euclidian: ", resultMatch.euclidian);
