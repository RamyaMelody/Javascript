window.onload = result();
function result(){
    text = localStorage.getItem("testJSON");
    obj = JSON.parse(text);
    document.getElementById("score1").innerHTML = obj.Team_A_Score;
    document.getElementById("score2").innerHTML = obj.Team_B_Score;
    
    if(obj.Team_A_Score > obj.Team_B_Score){
        document.getElementById("team1").innerHTML = "Team A WON!"
    }
    else if(obj.Team_A_Score == obj.Team_B_Score){
        document.getElementById("team1").innerHTML = "Match is Tied"
    
    }
    else {
        document.getElementById("team1").innerHTML = "Team B Won!"
    
    }

}