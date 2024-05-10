import "../styles/modern-normalize.css";
import "../styles/style.css";
import "../styles/components/header.css";
import Typewriter from "typewriter-effect/dist/core";

new Typewriter("#hero-title", {
  strings: ["Front End Dev", "SDET", "Tech Enthusiast"],
  autoStart: true,
  loop: true,

  pauseFor: 2000,
});
