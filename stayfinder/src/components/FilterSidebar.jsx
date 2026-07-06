import "./../styles/filter.css";

function FilterSidebar({
  search,
  setSearch,
  location,
  setLocation,
  rating,
  setRating,
  sort,
  setSort,
  locations
}) {
  return (
    <div className="filter-sidebar">

      <h2>Filters</h2>

      <input
        type="text"
        placeholder="Search Hotel..."
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
      />

      <select
        value={location}
        onChange={(e)=>setLocation(e.target.value)}
      >
        <option value="">All Locations</option>

        {locations.map((city,index)=>(
          <option key={index}>{city}</option>
        ))}

      </select>

      <select
        value={rating}
        onChange={(e)=>setRating(e.target.value)}
      >
        <option value="">All Ratings</option>
        <option value="4">4+ Stars</option>
        <option value="3">3+ Stars</option>
      </select>

      <select
        value={sort}
        onChange={(e)=>setSort(e.target.value)}
      >
        <option value="">Sort By</option>
        <option value="low">Price Low → High</option>
        <option value="high">Price High → Low</option>
      </select>

    </div>
  );
}

export default FilterSidebar;