var database;
var form,game,player;
var state,count;
var playerIndex;
var allplayers;
function setup(){
  database = firebase.database();
  
  createCanvas(500,500);
  
  game= new Game();
  player=new Player();
  form=new Form();
  game.getstate();
  game.start();
 

}

function draw(){
  background("white");
  
  if(count===2)
    {
      game.updateState(1)
      game.play()
    }
 
  
   
  
}

