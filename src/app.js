/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generateExcuse();
  });
  console.log("Hello Rigo from the console!");
};

let generateExcuse = () => {
  let pronoun = ["Mi", "Un/a"];
  let subject = [
    "ornitorrinco",
    "chofer",
    "alien",
    "planta",
    "roca",
    "vecino",
    "arroz"
  ];
  let action = [
    "se comió mi",
    "me arrebató mi",
    "robó mi",
    "le gritó a mi",
    "mordió mi",
    "perdió mi",
    "insultó mi"
  ];
  let what = [
    "casa",
    "arroz con leche",
    "proyecto",
    "corazón",
    "billetera",
    "maqueta",
    "computadora",
    "zapato"
  ];
  let when = ["en la noche", "ayer", "en la madrugada", "hace 3 días"];

  let pronIndx = Math.floor(Math.random() * pronoun.length);
  let subIndx = Math.floor(Math.random() * subject.length);
  let actIndx = Math.floor(Math.random() * action.length);
  let whatIndx = Math.floor(Math.random() * what.length);
  let whenIndx = Math.floor(Math.random() * when.length);

  return (
    pronoun[pronIndx] +
    " " +
    subject[subIndx] +
    " " +
    action[actIndx] +
    " " +
    what[whatIndx] +
    " " +
    when[whenIndx]
  );
};
