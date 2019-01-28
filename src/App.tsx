import * as React from "react";
import "./App.css";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import unsplash from "./api/unsplash";
interface IState {
  images: [];
}
class App extends React.Component {
  state: IState = { images: [] };
  onSubmit = async (term: String) => {
    console.log("A form is submitted");
    const response = await unsplash.get("/search/photos", {
      params: { query: term }
    });
    this.setState({ images: response.data.results });
    console.log(response.data.results);
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
