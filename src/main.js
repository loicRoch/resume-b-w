const cube1 = document
  .getElementById("cube1")
const cubeFront = document
  .getElementById("front1")


cube1.addEventListener("click", (e) => {
    document.getElementById("contactDiv").style.visibility = "visible";
    cube1.style.display = 'none'
    // cube1.style.animationPlayState = 'paused';
  });
