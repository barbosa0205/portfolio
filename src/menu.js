const sidebar = document.querySelector(".sidebar");
const btnMenu = document.querySelector("#btn-menu");

let menuCondition = false;

const toggleMenu = (condition) => {
  if (condition === false) {
    sidebar.className += " sidebar-open";
    return (menuCondition = true);
  } else {
    sidebar.classList.remove("sidebar-open");
    return (menuCondition = false);
  }
};

btnMenu.addEventListener("click", () => toggleMenu(menuCondition));
