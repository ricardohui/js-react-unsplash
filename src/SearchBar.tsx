import * as React from "react";

interface IProp {
  onSubmit: (term: String) => void;
}
class SearchBar extends React.Component<IProp> {
  public state = { term: "" };
  onInputChange: React.ChangeEventHandler<HTMLInputElement> = event => {
    console.log(event.currentTarget.value);
    this.setState({ term: event.currentTarget.value });
  };
  onFormSubmit: React.FormEventHandler<HTMLElement> = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };
  public render() {
    return (
      <div className="ui segment">
        SearchBar
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <label>Image Search</label>
          <input onChange={this.onInputChange} />
        </form>
      </div>
    );
  }
}

export default SearchBar;
