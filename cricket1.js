function team1() { 
    var team1obj = new Team(6,6,6,36);
    var team1 = team1obj.play("team1but");
    document.getElementById("team1but").disabled = true;
    document.getElementById("team2but").disabled = false;
}
function team2() {  
    var team2obj = new Team(6,6,6,36);
    var team2 = team2obj.play();
   
       
    document.getElementById("team2but").disabled = true;
    var a = document.getElementById("score1").value;
    var b = document.getElementById("score2").value;
    var c = document.getElementById("wicket1").value;
    var d = document.getElementById("wicket2").value;
    myObj = {Team_A_Score: a, Team_B_Score: b, Wickets_A: c, Wickets_B: d};
    myJSON = JSON.stringify(myObj);
    localStorage.setItem('testJSON', myJSON);
    location.href = "cricket_page2.html";
    
    
    
}


class Team{
    constructor(balls,wickets,players,tot_balls){
        this.balls = balls;
        this.wickets = wickets;
        this.players = players;
        this.score = 0;
        this.tot_balls=tot_balls;
    }
    play(id){
        var score_arr=[];
        
        while(this.tot_balls>0)
        {
           
            while(this.players>0)
            {
                this.balls=6;
               
                while(this.balls>0)
                {
                    var runs=Math.floor(Math.random()*7);
                    
                    if (runs==0){
                        break;
                    }
                    this.score+=runs;
                    this.balls--;

                }
                score_arr.push(this.score);
                this.players--;
                this.wickets--;
               
            }
            
            this.tot_balls--;
           
        }
        if(id == "team1but"){
        var score = this.score;
        document.getElementById("score1").value=score;
        var wicket = this.wickets;
        document.getElementById("wicket1").value=wicket;
        var players = this.players;
        document.getElementById("player1").value=players;
            
        }
        else{
        var score = this.score;
        document.getElementById("score2").value=score;
        var wicket = this.wickets;
        document.getElementById("wicket2").value=wicket;
        var players = this.players;
        document.getElementById("player2").value=players;
        
        
            
        }
         
      /* var pre=document.createElement("pre");
        document.body.appendChild(pre);

        score_arr=score_arr.map(Number);
        //alert(score_arr)
       var score_lbl=document.createElement("label");
        pre.appendChild(score_lbl);
        if(id=="team1but"){
            score_lbl.textContent="TEAM_A PLAYERS SCORE\n"
        }
        else{
            score_lbl.textContent="TEAM_B PLAYERS SCORE\n"
        }
        for (var i=0;i<score_arr.length;i++){
            if (i==0){
        score_lbl.textContent+="Player 0="+score_arr[i]+"\n";
            }
            else{
    score_lbl.textContent+="Player "+ i.toString() + "=" +(score_arr[i]-score_arr[i-1]).toString()+"\n";
            
            }
            
        }

        return (this.score);
    */}   
}
