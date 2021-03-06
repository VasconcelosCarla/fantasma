var imagemDaTorre, torre;
var imagemDaPorta, porta, grupoDePortas;
var imagemDeEscalador, escalador, grupoDeEscaladores;
var fantasma, imagemDoFantasma;
var grupoDeBlocoInvisivel, blocoInvisivel;
var estadoJogo = "JOGAR"

function preload(){
  imagemDaTorre = loadImage("tower.png");
  imagemDeEscalador = loadImage("climber.png");
  imagemDoFantasma = loadImage("ghost-standing.png");
  imagemDaPorta = loadImage("door.png");
  somAssustador = loadSound("spooky.wav");
  
}

function setup(){
  createCanvas(600,600);
  
  torre = createSprite(300,300);
  torre.addImage("tower",imagemDaTorre);
  torre.velocityY = 1;
  
  grupoDePortas = new Group();
  grupoDeEscaladores = new Group();
  
  fantasma = createSprite(200, 200, 50, 50);
  fantasma.addImage("fantasma", imagemDoFantasma);
  fantasma.scale = 0.3;
  
  
  
  
  
  }


function draw(){
  background(200);
  if(torre.y > 400){
      torre.y = 300
    
    
    
    }
  
  if(keyDown("left_arrow")){
  
  fantasma.x = fantasma.x - 3;
    
  }
  
  if(keyDown("right_arrow")){
    
  fantasma.x = fantasma.x + 3;
    
  }
  
  if(keyDown("space")){
    
  fantasma.velocityY = -10;
    
  }
  
  fantasma.velocityY = fantasma.velocityY + 0.8;
  
  if (grupoDeEscaladores.isTouching(fantasma)){
    
    fantasma.velocityY = 0;
    
  }
  
  gerarPortas();

  drawSprites();
  
  
}

  function gerarPortas() {
    
    //escreava o código aqui para gerar portas na torre
    
    if (frameCount % 220 === 0){
      
      porta = createSprite(200, -50);
      porta.addImage("porta",imagemDaPorta);
      porta.x = Math.round(random(120,400));
      porta.velocityY = 1;
      porta.lifetime = 800;
      grupoDePortas.add(porta);
     
      fantasma.depth = porta.depth;
      fantasma.depth += 1;
      
      escalador = createSprite(200, 10);
      escalador.addImage("escalador",imagemDeEscalador);
      escalador.x = porta.x;
      escalador.velocityY = 1;
      escalador.lifetime = 800;
      grupoDeEscaladores.add(escalador);
      
    }
    
    
  }
