"use strict";

var div;
var div2;
var h;

window.onload = function () {
  document.getElementById("slide1").onclick = first;
  document.getElementById("slide2").onclick = second;
  document.getElementById("slide3").onclick = fhree;
  div = document.getElementById("slider");
  div2 = document.getElementById("slidbox");
  h = document.getElementById("slidh");
  div.className = "slider1";
  div2.className = "slidbox1";
  h.innerHTML = "ITALIAN CUIZINE";
};

function first() {
  div.className = "slider1";
  div2.className = "slidbox1";
  h.innerHTML = "ITALIAN CUIZINE";
}

function second() {
  div.className = "slider2";
  div2.className = "slidbox2";
  h.innerHTML = "ITALIAN PIZZA";
}

function fhree() {
  div.className = "slider3";
  div2.className = "slidbox3";
  h.innerHTML = "WE COOKED YOUR DESIRED </br> PIZZA RECIPE";
}