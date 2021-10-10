import * as React from "react";
import { hot } from "react-hot-loader";

import { TextArea } from "./TextArea";

import "./../assets/scss/App.scss";

class App extends React.Component<Record<string, unknown>, undefined> {
  public render() {
    return (
      <div className="app">
        <h1 className="logo">Typings project demo</h1>
        <TextArea />
      </div>
    );
  }
}

declare let module: Record<string, unknown>;

export default hot(module)(App);
