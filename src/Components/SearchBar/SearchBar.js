import React from "react";
import "./SearchBar.css";

export class Searchbar extends React.Component {
  render() {
    return (
      <div className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist" />
        <button class="SearchButton">SEARCH</button>
      </div>
    );
  }
}
