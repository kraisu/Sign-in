"use strict";

const btnSignIn = document.querySelector("#btnSignIn");

btnSignIn.onclick = function () {
  const username = document.querySelector("#username").value;
  const password1 = document.querySelector("#password1").value;

  const tiedot = document.querySelector("#tiedot");
  tiedot.innerHTML = `Username is ${username}, password is ${password1}`;

  return false;
};
