import getPalleteColors from "./getPalleteColors";
import readImageToBuffer from "./readImageToBuffer";
import ScrapPage from "./services/createScrapPage.Service";

const image = readImageToBuffer("./tmp/person.jpg");

getPalleteColors(image, "jpg").then(console.log);

ScrapPage().then();
