const h1 = "Searching location...",
  h2 = "Analyzing the clouds... ",
  h3 = "Looking outside your window... ",
  h4 = "Gathering last information... ",
  h5 = "Idk, just look outside.";

const input = document.querySelector(".input"),
  btn = document.querySelector("button"),
  progress = document.querySelector(".progress-container"),
  title = document.querySelector("h1");

btn.addEventListener("click", () => {
  input.classList.add("hidden");
  progress.classList.remove("hidden");

  title.innerHTML = h1;

  const progressbar = document.querySelector(".progress");

  const changeProgress = (progress) => {
    progressbar.style.width = `${progress}%`;
  };

  setTimeout(() => {
    changeProgress(22);
    title.innerHTML = h1;
  }, 1000);
  setTimeout(() => {
    changeProgress(45);
    title.innerHTML = h2;
  }, 2500);
  setTimeout(() => {
    changeProgress(85);
    title.innerHTML = h3;
  }, 5700);
  setTimeout(() => {
    changeProgress(98);
    title.innerHTML = h4;
  }, 7200);
  setTimeout(() => {
    changeProgress(100);
    title.innerHTML = h5;
  }, 10000);
});
