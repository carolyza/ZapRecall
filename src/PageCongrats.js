import Top from "./Top.js";
import Style from "./css/PageCongrats.css";
import IMG from "./assets/party.png";

export default function PageCongrats(){
    return(
<div class = "PageCongrats hidden">
    <Top/>
    <div class = "layout">
        <div class ="congrats">
            <h2>PARABÉNS!</h2>
            <img src ={IMG}></img>
        </div>
        <p>Você não esqueceu de nenhum flashcard!</p>
    </div>
</div>
    )
}