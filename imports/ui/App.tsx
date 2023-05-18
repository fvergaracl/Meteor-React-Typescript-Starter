import React from "react";
import { Hello } from "./Hello.tsx";
import { Info } from "./Info.tsx";
import "../styles/main.scss";
export const App = () => (
  <div>
    <h1>Welcome to Meteor!</h1>
    <Hello />
    <Info />
  </div>
);
