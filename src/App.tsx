import * as React from "react";
import "./App.css";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
interface IState {
  images: [];
}
class App extends React.Component {
  state: IState = { images: [] };
  onSubmit = (term: String) => {
    console.log("A form is submitted");
  };
  public render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
