const cube1 = document.getElementById("cube1");

cube1.addEventListener("click", () => {
  cube1.style.display = "none";
  document.getElementById("contactDiv").style.visibility = "visible";
});


  /* Toggle Animations */
  const jstoggle = document.getElementById('cube');
  jstoggle.addEventListener('hover', () => {
    const animations = document.querySelectorAll('[data-animation');
    animations.forEach(animation => {
      const running = animation.style.animationPlayState || 'running';
      animation.style.animationPlayState = running === 'running' ? 'paused' : 'running';
    })
  });