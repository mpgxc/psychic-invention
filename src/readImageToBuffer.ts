import fs from "fs";
import path from "path";

function readImageToBuffer(imageName: string) {
  const pathImage = path.join(__dirname, imageName);
  return fs.readFileSync(pathImage);
}

export default readImageToBuffer;
