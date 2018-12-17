import SearchResults from "../components/SearchResults";

const SearchPage = props => (
  <div>
    <SearchResults query={props.query.query} />
  </div>
);

export default SearchPage;
