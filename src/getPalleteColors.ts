import getColors from "get-image-colors";

export type ImageType = "jpg" | "png" | "jpeg" | "gif";

async function getPalleteColors(imageBuffer: Buffer, typeImage: ImageType) {
  const allColors = await getColors(imageBuffer, `image/${typeImage}`);

  const ResultAllColors = allColors.map((color) => color.hex());

  return ResultAllColors;
}

export default getPalleteColors;
