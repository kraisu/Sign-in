"use strict";

const btnSignIn = document.querySelector("#btnSignIn");

btnSignIn.onclick = function () {
  const username = document.querySelector("#username").value;
  const password1 = document.querySelector("#password1").value;

  const tiedot = document.querySelector("#tiedot");
  tiedot.innerHTML = `${username} ${password1}`;

  return false;
};
