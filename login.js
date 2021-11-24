function nextPage(){
    player1=document.getElementById("Player1n").value ;
    player2=document.getElementById("Player2n").value ;

    localStorage.setItem("Player1",player1);
    localStorage.setItem("Player2",player2);

    window.location="game.html";
}