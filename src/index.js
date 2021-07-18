const biographyImg = document.getElementById("biography-img");

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
