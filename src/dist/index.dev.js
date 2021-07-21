"use strict";

var biographyImg = document.getElementById("biography-img");
var $iframe = document.getElementById("iframe");
var $iframeContainer = document.getElementById("iframe-container");
var $closeIframe = document.getElementById("close-iframe");
var $iframeCalc = document.getElementById("iframe-calc");
var $iframePokedex = document.getElementById("iframe-pokedex");

biographyImg.onmouseover = function () {
  biographyImg.src = "./src/resources/Devices-amico-hover.svg";
  biographyImg.classList.add("biography-img-hover");
  biographyImg.classList.remove("biography-img");
};

biographyImg.onmouseout = function () {
  biographyImg.src = "./src/resources/Devices-amico.svg";
  biographyImg.classList.add("biography-img");
  biographyImg.classList.remove("biography-img-hover");
};

var openIframe = function openIframe(url) {
  if (url === "") {
    $iframeContainer.classList.remove("visible");
    $iframeContainer.classList.add("hidden");
  } else {
    $iframe.src = url;
    $iframeContainer.classList.add("visible");
    $iframeContainer.classList.remove("hidden");
  }
};

$iframeCalc.addEventListener("click", function () {
  openIframe("https://barbosa0205.github.io/Minimalist-Calculator/");
});
$iframePokedex.addEventListener("click", function () {
  openIframe("https://barbosa0205.github.io/Pokedex/");
});
$closeIframe.addEventListener("click", function () {
  openIframe("");
});