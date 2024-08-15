let cor;
let horizontal;
let vertical;

function setup() {
  createCanvas(1000, 800);
  background("#9C27B0");
  cor=color(random(0,255),random(0,255),random(0,255));
  vertical=400;
  horizontal=500
}

function draw(){

circle(horizontal,vertical,100),
  fill(cor);
  if(mouseX<horizontal) {
    horizontal--
  }
  if(mouseX>horizontal) {
    horizontal++
  }
    if(mouseY<vertical) {
    vertical--  
    }
    
    if(mouseY>horizontal) {
    horizontal++
}
  
  if (mouseIsPressed){ 
    cor=color(random(0,255),random(0,255),random(0,255),random(0,100));  
}
  
}
