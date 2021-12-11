import Top from "./Top.js";
import Card from "./Card.js";
import "./css/PageTwo.css";
import { useState } from "react";

const cards =[{question:"O que queres?", numberCard:"1/5", 
    inside: "labaxurajksnadfjiasndfoinafsoindsafkmdsnfjdsnfkmdsnfkmsdnfsdiofn9eufnjksdnfkmdxnfsdijfnisdjnfisdjnfjsdnfsdjknfisdjnfjin",
    button1:"Aprendi agora",button2:"Não lembrei",
 button3:"Lembrei com esforço",button4:"Zap!"}];


export default function PageTwo(){
const [answers,SetAnswers]= useState(0);

const [FaceCard,SetFaceCard]= useState(
    <Card question = {cards[answers].question}
    numberCard = {answers}
    inside = {cards[answers].inside}
    button1 ={cards[answers].button1}
    button2 ={cards[answers].button2}
    button3={cards[answers].button3}
    button4={cards[answers].button4}
    counter={()=>Counter()}
    />
)

function Counter(){
    SetAnswers(answers+1);
    console.log(answers);
}

    const cards =[{question:"O que queres?", numberCard:"1/5", 
    inside: "labaxurajksnadfjiasndfoinafsoindsafkmdsnfjdsnfkmdsnfkmsdnfsdiofn9eufnjksdnfkmdxnfsdijfnisdjnfisdjnfjsdnfsdjknfisdjnfjin",
    button1:"Aprendi agora",button2:"Não lembrei",
 button3:"Lembrei com esforço",button4:"Zap!"}
// {question:"O que vems?", numberCard:"2/5", 
//     inside: "labaxurajksnadfjiasndfoinafsoindsafkmdsnfjdsnfkmdsnfkmsdnfsdiofn9eufnjksdnfkmdxnfsdijfnisdjnfisdjnfjsdnfsdjknfisdjnfjin",
//     button1:"Aprendi agora",button2:"Não lembrei",
// button3:"Lembrei com esforço",button4:"Zap!"},
// {question:"O que comes?", numberCard:"3/5", 
//     inside: "labaxurajksnadfjiasndfoinafsoindsafkmdsnfjdsnfkmdsnfkmsdnfsdiofn9eufnjksdnfkmdxnfsdijfnisdjnfisdjnfjsdnfsdjknfisdjnfjin",
//     button1:"Aprendi agora",button2:"Não lembrei",
// button3:"Lembrei com esforço",button4:"Zap!"},
// {question:"O que fazes?", numberCard:"4/5", 
//     inside: "labaxurajksnadfjiasndfoinafsoindsafkmdsnfjdsnfkmdsnfkmsdnfsdiofn9eufnjksdnfkmdxnfsdijfnisdjnfisdjnfjsdnfsdjknfisdjnfjin",
//     button1:"Aprendi agora",button2:"Não lembrei",
// button3:"Lembrei com esforço",button4:"Zap!"},
// {question:"O que amas?", numberCard:"5/5", 
//     inside: "labaxurajksnadfjiasndfoinafsoindsafkmdsnfjdsnfkmdsnfkmsdnfsdiofn9eufnjksdnfkmdxnfsdijfnisdjnfisdjnfjsdnfsdjknfisdjnfjin",
//     button1:"Aprendi agora",button2:"Não lembrei",
// button3:"Lembrei com esforço",button4:"Zap!"}
    
]
    
    return(
        // <div class = "PageTwo">
        <>
            <Top/>
            {FaceCard}
        {/* </div> */}
        </>
    )
}