function GlobalFilter({ filter, setFilter }) {
  return (
    <label htmlFor="global">
      Search:{' '}
      <input
        id="global"
        type="text"
        className="p-1 rounded-md m-0 w-48"
        value={filter || ''}
        onChange={(e) => setFilter(e.target.value)}
      />
    </label>
  );
}

export default GlobalFilter;
