import "./css/PageOne.css";
import logotipo from "./assets/logo.png";
import next from "./assets/next.png";
import App from "./App.js";

export default function PageOne(props) {
  return (
    <div className="PageOne">
      <div className="logo">
        <img src={logotipo}></img>
      </div>
      <div data-identifier="start-zap-recall" className="Start" onClick={() => props.NextPage()}>
        <p>Praticar React</p>
        <img src={next}></img>
      </div>
    </div>
  );
}
