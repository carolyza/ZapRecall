import Top from "./Top.js";
import Card from "./Card.js";
import Style from "./css/PageTwo.css";


export default function PageTwo(){
    const cards =[{question:"O que queres?", numberCard:"1/5", 
    inside: "labaxurajksnadfjiasndfoinafsoindsafkmdsnfjdsnfkmdsnfkmsdnfsdiofn9eufnjksdnfkmdxnfsdijfnisdjnfisdjnfjsdnfsdjknfisdjnfjin",
    button1:"Aprendi agora",button2:"Não lembrei",
 button3:"Lembrei com esforço",button4:"Zap!"},
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
        <div class = "PageTwo ">
            <Top/>
            {cards.map((card)=>(
                <Card question = {card.question}
                numberCard = {card.numberCard}
                inside = {card.inside}
                button1 ={card.button1}
                button2 ={card.button2}
                button3={card.button3}
                button4={card.button4}/>
            ))}
        </div>
    )
}