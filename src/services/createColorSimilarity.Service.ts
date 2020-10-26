import { deltaE, distance } from "chroma-js";

//ref: https://gka.github.io/chroma.js/#chroma-distance

export default (colorA: string, colorB: string) => {
  return {
    deltae: deltaE(colorA, colorB),
    euclidian: distance(colorA, colorB, "rgb"),
  };
};
