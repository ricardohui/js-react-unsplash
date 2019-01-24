import * as React from "react";
import "./App.css";
import SearchBar from "./SearchBar";

class App extends React.Component {
  state = { images: [] };

  public render() {
    return (
      <div className="ui container">
        <SearchBar />
      </div>
    );
  }
}

export default App;
