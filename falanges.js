function setup() {
  createCanvas(1000, 1000);
  background(255);
}

function draw() {
  // Definir cores
  const corExterna = color(0); // Vermelho
  const corInterna = color(0); // Azul
  const corMeio = color(0); // Verde
  const corDestaque = color(255, 255, 255); // Branco

  // Desenhar circulo externo
  desenharEspera(0, 0, 1000, corExterna, 4);
 // Desenhar circulos internos
  desenharEspera(250, 250, 500, corInterna, 4);
  desenharEspera(0, (1000-250)/2, 250, corMeio, 4);
  desenharEspera( (1000-250), (1000-250)/2, 250, corMeio, 4);
  desenharEspera( (1000-250)/2, 0, 250, corMeio, 4);
  desenharEspera( (1000-250)/2, (1000-250), 250, corMeio, 4);
}

// Função para desenhar uma espera
function desenharEspera(x, y, tamanho, cor, strk) {
  stroke(cor);
  strokeWeight(strk);
  noFill();
  ellipse(x + tamanho / 2, y + tamanho / 2, tamanho, tamanho);
}
