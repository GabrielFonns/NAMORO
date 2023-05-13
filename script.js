function sim() {
  window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
}

var nao = document.getElementById("nao");

nao.addEventListener("mouseover", function () {
  var nova_posicao_x =
    Math.floor(Math.random() * (window.innerWidth - 200)) + 100;
  var nova_posicao_y =
    Math.floor(Math.random() * (window.innerHeight - 200)) + 100;
  nao.style.left = nova_posicao_x + "px";
  nao.style.top = nova_posicao_y + "px";
  nao.classList.add("move");
});

nao.addEventListener("animationend", function () {
  nao.classList.remove("move");
});
