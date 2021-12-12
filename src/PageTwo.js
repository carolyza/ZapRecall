import Top from "./Top.js";
import Card from "./Card.js";
import "./css/PageTwo.css";
import { useState } from "react";
import App from "./App.js";

export default function PageTwo({ Win, Lose }) {
  const [answers, SetAnswers] = useState(0);

  function Counter() {
    SetAnswers(answers + 1);
    console.log(answers);
  }

  const cards = [
    {
      question: "O que é JSX?",
      numberCard: "1/5",
      inside: "Uma extensão de linguagem do JavaScript",
      button1: "Aprendi agora",
      button2: "Não lembrei",
      button3: "Lembrei com esforço",
      button4: "Zap!",
    },
    {
      question: "O React é __",
      numberCard: "2/5",
      inside: "uma biblioteca JavaScript para construção de interfaces",
      button1: "Aprendi agora",
      button2: "Não lembrei",
      button3: "Lembrei com esforço",
      button4: "Zap!",
    },
    {
      question: "Podemos colocar __ dentro do JSX",
      numberCard: "3/5",
      inside: "expressões",
      button1: "Aprendi agora",
      button2: "Não lembrei",
      button3: "Lembrei com esforço",
      button4: "Zap!",
    },
    {
      question: "Componentes devem iniciar com __ ",
      numberCard: "4/5",
      inside: "letra maiúscula",
      button1: "Aprendi agora",
      button2: "Não lembrei",
      button3: "Lembrei com esforço",
      button4: "Zap!",
    },
    {
      question: "O ReactDOM nos ajuda __",
      numberCard: "5/5",
      inside: "interagindo com a DOM para colocar componentes React na mesma",
      button1: "Aprendi agora",
      button2: "Não lembrei",
      button3: "Lembrei com esforço",
      button4: "Zap!",
    },
    {
      question: "Usamos o npm para __",
      numberCard: "5/5",
      inside: "gerenciar os pacotes necessários e suas dependências",
      button1: "Aprendi agora",
      button2: "Não lembrei",
      button3: "Lembrei com esforço",
      button4: "Zap!",
    },
    {
      question: "Usamos props para __",
      numberCard: "5/5",
      inside: "passar diferentes informações para componentes",
      button1: "Aprendi agora",
      button2: "Não lembrei",
      button3: "Lembrei com esforço",
      button4: "Zap!",
    },
    {
      question: "Usamos estado (state) para __",
      numberCard: "5/5",
      inside:
        "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
      button1: "Aprendi agora",
      button2: "Não lembrei",
      button3: "Lembrei com esforço",
      button4: "Zap!",
    },
  ];

  return (
    // <div class = "PageTwo">
    <>
      <Top />
      <Card
        question={cards[answers].question}
        numberCard={answers}
        inside={cards[answers].inside}
        button1={cards[answers].button1}
        button2={cards[answers].button2}
        button3={cards[answers].button3}
        button4={cards[answers].button4}
        counter={() => Counter()}
        win={() => Win()}
        lose={() => Lose()}
      />

      {/* </div> */}
    </>
  );
}
