import { proxy } from "valtio";

const state = proxy({
  intro: true,
  color: "#ff8110",
  shirtColor: "#ffa30f",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./logo3.png",
  fullDecal: "./logo.png",
});

export default state;
