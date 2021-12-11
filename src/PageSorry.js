import Top from "./Top.js";
import Style from "./css/PageSorry.css";
import IMG from "./assets/sad.png";

export default function PageSorry(){
    return(
        <div class = "PageSorry hidden">
            <Top/>
            <div class = "layoutSorry">
        <div class ="sorry">
            <h2>Puts..</h2>
            <img src ={IMG}></img>
        </div>
        <p>Você esqueceu alguns flashcards..Não desanime! Na próxima você consegue!</p>
    </div>

        </div>
    )
}