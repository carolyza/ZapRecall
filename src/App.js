import PageOne from "./PageOne.js";
import PageTwo from "./PageTwo.js";
import PageCongrats from "./PageCongrats.js";
import PageSorry from "./PageSorry.js";
import { useState } from "react";

export default function App() {
  const [Page, SetPage] = useState(<PageOne NextPage={NextPage} />);

  function NextPage() {
    SetPage(<PageTwo Win={Win} Lose={Lose} />);
  }

  function Win() {
    SetPage(<PageCongrats />);
  }

  function Lose() {
    SetPage(<PageSorry />);
  }

  return <>{Page}</>;
}
