import React from "react";
import { Hello } from "./Hello.jsx";
import { Info } from "./Info.jsx";

class X {
  a: any;
  constructor() {
    this.a = "test";
  }
}

class Y extends X {
  a: string;
}

console.log(new X().a);
console.log(new Y().a);

export const App = () => (
  <div>
    <h1>Welcome to Meteor!</h1>
    <Hello />
    <Info />
  </div>
);
