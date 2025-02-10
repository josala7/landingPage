const menuIcon = document.querySelector(".menuicon");
const menuList = document.querySelector(".nav-parent .menu ul");

menuIcon.addEventListener("click", () => {
  menuList.style.display =
    menuList.style.display === "block" ? "none" : "block";
});
