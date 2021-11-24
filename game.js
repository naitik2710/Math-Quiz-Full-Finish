player1n=localStorage.getItem("Player1");
player2n=localStorage.getItem("Player2");

player1s=0;
player2s=0;

document.getElementById("name1").innerHTML=player1n+" : ";
document.getElementById("name2").innerHTML=player2n+" : ";

document.getElementById("score1").innerHTML=player1s;
document.getElementById("score2").innerHTML=player2s;

document.getElementById("Question").innerHTML="Question Turn - "+player1n;
document.getElementById("Answer").innerHTML="Answer Turn - "+player2n;

function send_q(){
    n1=document.getElementById("i1").value ;
    n2=document.getElementById("i2").value ;
    answer=parseInt(n1)*parseInt(n2);
    setquestion="<br><h4>"+n1+" X "+n2+"</h4>";
    inputbox="<br>Answer: <input type='text' id='input_check_box'>";
    checkbutton="<br><br><button onclick='checkans()' class='btn btn-warning'>Check</button>";
    row=setquestion+inputbox+checkbutton;
    document.getElementById("div1").innerHTML=row;
    document.getElementById("i1").value="";
    document.getElementById("i2").value="";
}
question_turn="player1";
answer_turn="player2";


function checkans(){
    ans=document.getElementById("input_check_box").value;
    if(ans==answer){
        if(answer_turn=="player1"){
            player1s=player1s+1;
            document.getElementById("score1").innerHTML=player1s;
        }
        else{
            player2s=player2s+1;
            document.getElementById("score2").innerHTML=player2s;
        }
    }
    if(question_turn=="player1")
    {
        question_turn="player2";
        document.getElementById("Question").innerHTML="Question Turn - "+player2n;
    }
    else{
        question_turn="player1";
        document.getElementById("Question").innerHTML="Question Turn - "+player1n;
    }
    if(answer_turn=="player1")
    {
        answer_turn="player2";
        document.getElementById("Answer").innerHTML="Answer Turn - "+player2n;
    }
    else{
        answer_turn="player1";
        document.getElementById("Answer").innerHTML="Answer Turn - "+player1n;
    }
}