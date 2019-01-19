import React from "react";
class SearchBar extends React.Component {
  onInputChange = event => {
    this.setState({ term: event.target.value });
  };
  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <label>Image Search</label>
          <input onChange={this.onInputChange} />
        </form>
      </div>
    );
  }
}

export default SearchBar;
