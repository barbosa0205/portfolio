const biographyImg = document.getElementById("biography-img");
const $iframe = document.getElementById("iframe");
const $iframeContainer = document.getElementById("iframe-container");
const $closeIframe = document.getElementById("close-iframe");
const $iframeCalc = document.getElementById("iframe-calc");
const $iframePokedex = document.getElementById("iframe-pokedex");

biographyImg.onmouseover = () => {
  biographyImg.src = "./src/resources/Devices-amico-hover.svg";
  biographyImg.classList.add("biography-img-hover");
  biographyImg.classList.remove("biography-img");
};

biographyImg.onmouseout = () => {
  biographyImg.src = "./src/resources/Devices-amico.svg";
  biographyImg.classList.add("biography-img");
  biographyImg.classList.remove("biography-img-hover");
};

const openIframe = (url) => {
  if (url === "") {
    $iframeContainer.classList.remove("visible");
    $iframeContainer.classList.add("hidden");
  } else {
    $iframe.src = url;
    $iframeContainer.classList.add("visible");
    $iframeContainer.classList.remove("hidden");
  }
};

$iframeCalc.addEventListener("click", () => {
  openIframe("https://barbosa0205.github.io/Minimalist-Calculator/");
});

$iframePokedex.addEventListener("click", () => {
  openIframe("https://barbosa0205.github.io/Pokedex/");
});

$closeIframe.addEventListener("click", () => {
  openIframe("");
});
