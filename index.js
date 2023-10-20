let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

setInterval(() => {
  let currrentTime = new Date();

  hrs.innerHTML =
    (currrentTime.getHours() < 10 ? "0" : "") + currrentTime.getHours();
  min.innerHTML =
    (currrentTime.getMinutes() < 10 ? "0" : "") + currrentTime.getMinutes();

  sec.innerHTML =
    (currrentTime.getSeconds() < 10 ? "0" : "") + currrentTime.getSeconds();
}, 1000);