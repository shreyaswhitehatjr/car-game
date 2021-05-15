class Game
{
    constructor()
    {

    }
    getstate()
    {
      var gameStateref=database.ref('gameState') 
        gameStateref.on("value",function(data){state=data.val()})   
    }
    
    updateState(state)
    {
      database.ref('/').update({gameState:state})   
 
    }
    
    start()
    {
      player.getcount();
      form.display();
               

    }

    play()
    {
     form.hide();
     text("game started",350,20)    
     player.getPlayerInfo();
     var x=300,y=100;
     for(var plr in allplayers)
     {
     text(allplayers[plr].name+":"+allplayers[plr].distance,x,y);
     y=y+50;
     if(keyIsDown(UP_ARROW))
     {
       player.distance= player.distance+50
       player.update();
     }
     }
    }

    end()
    {

    }
}