import "./App.css";
import { Searchbar } from "../SearchBar/SearchBar";
import { SearchResults } from "../SearchResults/SearchResults";
import { Playlist } from "../Playlist/Playlist";

function App() {
  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div class="App">
        <Searchbar />
        <div class="App-playlist">
          <SearchResults />
          <Playlist />
        </div>
      </div>
    </div>
  );
}

export default App;
