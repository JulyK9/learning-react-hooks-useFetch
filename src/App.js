import { useState } from "react";
import GithubUser from "./components/GithubUser";
import "./styles.css";

export default function App() {
  const [login, setLogin] = useState("julyk9");

  return (
    <>
      <GithubUser login={login} />
    </>
  );
}
