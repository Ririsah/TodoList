import './Filter.css';

const Filter = ({ filter, setFilter, setSort }) => {
  return  (
    <div className="filter">
      <div className="filter-options">
        <div className="status">
          <p>Status:</p>
          <select className="select" value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="All">all</option>
            <option value="Completed">completed</option>
            <option value="Incomplete">incomplete</option>
          </select>
        </div>
        <div className="order">
          <p>Order:</p>
          <button className="asc" onClick={() => setSort("Asc")}>Asc</button>
          <button onClick={() => setSort("Desc")}>Desc</button>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Filter;