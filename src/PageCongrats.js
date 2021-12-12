import Top from "./Top.js";
import "./css/PageCongrats.css";
import IMG from "./assets/party.png";

export default function PageCongrats() {
  return (
    <div class="PageCongrats">
      <Top />
      <div class="layout">
        <div class="congrats">
          <h2>PARABÉNS!</h2>
          <img src={IMG}></img>
        </div>
        <p>Você não esqueceu de nenhum flashcard!</p>
      </div>
    </div>
  );
}
