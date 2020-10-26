import getPalleteColors from "./getPalleteColors";
import readImageToBuffer from "./readImageToBuffer";

const image = readImageToBuffer("./tmp/person.jpg");

getPalleteColors(image, "jpg").then(console.log);
