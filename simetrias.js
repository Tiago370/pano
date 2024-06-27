function setup() {
    createCanvas(1000, 1000);
    background(173, 216, 230);
  }
  
  function draw() {
    let c = color(0, 0, 128);
    // Desenhar fundo direito
    fill(c)
    rect(500, 0, 500, 1000);
    fill(173, 216, 230)
    rect(500, 250, 250, 500);
    fill(c)
    rect(250, 250, 250, 500);

}
  
  