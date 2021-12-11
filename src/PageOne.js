import Style from "./css/PageOne.css";
import logotipo from "./assets/logo.png";
import next from "./assets/next.png";


export default function PageOne(){
    return(
        <div class = "PageOne hidden">
        <div class ="logo">
        <img src ={logotipo}></img>
        </div>
        <div class ="Start">
        <p>Praticar React</p>
        <img src={next}></img>
        </div>
        </div>
    )
}