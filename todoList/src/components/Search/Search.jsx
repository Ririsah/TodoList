import './Search.css'; 

const Search = ({ search, setSearch }) => {
  return ( 
    <div className="search"> 
        <input type="text" value={search} 
        onChange={(e) => setSearch(e.target.value)} 
        placeholder="type to search..." />
    </div>
  );
};

export default Search;