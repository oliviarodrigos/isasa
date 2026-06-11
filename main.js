const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

for (let i = 0; i < botoes.length; i++) {
  botoes[i].onclick = function () {
    for (let j = 0; j < botoes.length; j++) {
      botoes[j].classList.remove("ativo");
      textos[j].classList.remove("ativo");
    }

    botoes[i].classList.add("ativo");
    textos[i].classList.add("ativo");
  };
}

const contadores = document.querySelectorAll(".contador");

const tempoObjetivo1 = new Date("2027-12-05T00:00:00");  
const tempoObjetivo2 = new Date("2027-12-05T00:00:00");
const tempoObjetivo3 = new Date("2027-12-30T00:00:00");
const tempoObjetivo4 = new Date("2027-02-01T00:00:00");

const tempos = [tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4];

function calculaTempo(tempoObjetivo) {
  const tempoAtual = new Date();
  let tempoFinal = Math.max(0, tempoObjetivo - tempoAtual);

  const segundos = Math.floor(tempoFinal / 1000) % 60;
  const minutos = Math.floor(tempoFinal / 1000 / 60) % 60;
  const horas = Math.floor(tempoFinal / 1000 / 60 / 60) % 24;
  const dias = Math.floor(tempoFinal / 1000 / 60 / 60 / 24);

  return (
    dias +
    " dias " +
    horas +
    " horas " +
    minutos +
    " minutos " +
    segundos +
    " segundos"
  );
}

function atualizaCronometro() {
  for (let i = 0; i < contadores.length; i++) {
    contadores[i].textContent = calculaTempo(tempos[i]);
  }
}

function comecaCronometro() {
  atualizaCronometro();
  setInterval(atualizaCronometro, 1000);
}

comecaCronometro();