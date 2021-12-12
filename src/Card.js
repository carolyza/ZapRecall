import IMG from "./assets/turn.png";
import { useState } from "react";

let countFail= 0;
let cardsQntd= 1;

export default function Card({question,numberCard,inside,button1,button2,button3,button4,counter}){

const [FaceCard,SetFaceCard]= useState("card frontface");

function ChangeCard(){
    if(FaceCard=="card frontface"){
    SetFaceCard("card backface");
}
else{
    SetFaceCard("card frontface");
}
}

function NewCard(color){
if(color=="black"){
    SetFaceCard("card answerface black");
}
else if(color=="red"){
    SetFaceCard("card answerface red");
    countFail++;
}
else if(color=="green"){
    SetFaceCard("card answerface green");
}
else{
    SetFaceCard("card answerface yellow");
}
}

function NextCard(counter,ChangeCard){
    if(cardsQntd<5){
ChangeCard();
counter();
cardsQntd++;
}
}



    return(
        <div className ={FaceCard}>
                <div className="topCard">
                    <p>{question}</p>
                    <h2>{numberCard+1}/5</h2>
                </div>
            <div className="TopFront">
            <h2>{numberCard+1}/5</h2>
            </div>

            <div className="Question">
                <h3>{question}</h3>
            </div>

            <div className="openAnswer">
            <img src={IMG} onClick={()=>ChangeCard()}></img>
            </div>
                <div className="contentCard">
                    <h3>{inside}</h3>
                </div>
                <div className="buttons">
                    <button className="button1" onClick = {()=>NewCard("black")}>{button1}</button>
                    <button className="button2" onClick = {()=>NewCard("red")}>{button2}</button>
                    <button className="button3" onClick = {()=>NewCard("green")}>{button3}</button>
                    <button className="button4" onClick = {()=>NewCard("yellow")}>{button4}</button>
                    </div>
                    <div className="GoToNext">
                        <img src={IMG} onClick={()=>NextCard(counter,ChangeCard)}>
                            </img></div>
            </div>
    )
}